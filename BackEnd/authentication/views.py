# views.py
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.utils import timezone
from django.db import transaction
from django.core.mail import send_mail
from django.conf import settings
from datetime import datetime
import random
import string

from .models import OTPVerification, User, Address, CityMunicipality, Province

def send_otp(email):
    """
    Send OTP to the given email address
    """
    try:
        # Invalidate old OTPs for this email
        OTPVerification.objects.filter(email=email, is_used=False).update(is_used=True)
        
        # Generate a new OTP
        otp_code = OTPVerification.generate_otp()
        otp = OTPVerification.objects.create(
            email=email,
            otp_code=otp_code,
            expires_at=timezone.now() + timezone.timedelta(minutes=10)
        )
        
        # Send OTP via email
        send_mail(
            subject="Your OTP Code - BukCare",
            message=f"Your OTP code is {otp_code}. It will expire in 10 minutes.",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[email],
            fail_silently=False,
        )
        
        return otp
        
    except Exception as e:
        print(f"Error in send_otp function: {str(e)}")
        raise e

class SendOTPView(APIView):
    permission_classes = [AllowAny] 
    
    def post(self, request):
        email = request.data.get("email")
        
        if not email:
            return Response({"error": "Email is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Check if user already exists
        if User.objects.filter(email=email).exists():
            return Response({"error": "User with this email already exists"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            # Generate OTP code
            otp_code = ''.join(random.choices(string.digits, k=6))
            
            # Invalidate old OTPs for this email
            OTPVerification.objects.filter(email=email, is_used=False).update(is_used=True)
            
            # Create new OTP record
            otp_record = OTPVerification.objects.create(
                email=email,
                otp_code=otp_code,
                expires_at=timezone.now() + timezone.timedelta(minutes=10)
            )
            
            # Send OTP via email
            send_mail(
                subject="Your OTP Code - BukCare",
                message=f"Your OTP code is {otp_code}. It will expire in 10 minutes.",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[email],
                fail_silently=False,
            )
            
            return Response({"message": "OTP sent successfully"}, status=status.HTTP_200_OK)
            
        except Exception as e:
            print(f"Email sending error: {str(e)}")
            return Response({"error": "Failed to send OTP"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class VerifyOTPView(APIView):
    permission_classes = [AllowAny] 
    
    def post(self, request):
        email = request.data.get("email")
        otp_code = request.data.get("otp")

        if not email or not otp_code:
            return Response({"error": "Email and OTP are required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            otp = OTPVerification.objects.filter(
                email=email,
                otp_code=otp_code,
                is_used=False
            ).latest("created_at")
        except OTPVerification.DoesNotExist:
            return Response({"error": "Invalid OTP"}, status=status.HTTP_400_BAD_REQUEST)

        # Check expiration
        if otp.is_expired():
            return Response({"error": "OTP expired"}, status=status.HTTP_400_BAD_REQUEST)

        # Mark as used
        otp.is_used = True
        otp.save()

        return Response({"message": "OTP verified successfully"}, status=status.HTTP_200_OK)

class CompleteSignupView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        try:
            # Extract data from request
            email = request.data.get("email")
            username = request.data.get("username")
            first_name = request.data.get("first_name")
            middle_name = request.data.get("middle_name")
            last_name = request.data.get("last_name")
            phone = request.data.get("phone")
            password = request.data.get("password")
            sex = request.data.get("sex")
            date_of_birth = request.data.get("date_of_birth")
            contact_number = request.data.get("contact_number")
            address_data = request.data.get("address", {})
            
            print(f"Received data: {request.data}")  # Debug log
            
            # Validate required fields
            if not all([email, password, first_name, last_name, phone, sex, date_of_birth, contact_number]):
                missing_fields = []
                if not email: missing_fields.append("email")
                if not password: missing_fields.append("password")
                if not first_name: missing_fields.append("first_name")
                if not last_name: missing_fields.append("last_name")
                if not phone: missing_fields.append("phone")
                if not sex: missing_fields.append("sex")
                if not date_of_birth: missing_fields.append("date_of_birth")
                if not contact_number: missing_fields.append("contact_number")
                
                return Response({
                    "error": f"Missing required fields: {', '.join(missing_fields)}"
                }, status=status.HTTP_400_BAD_REQUEST)
            
            # Validate address fields
            street = address_data.get("street")
            barangay = address_data.get("barangay")
            city_municipality_name = address_data.get("city_municipality")
            province_name = address_data.get("province")
            zip_code = address_data.get("zip_code")
            
            if not all([street, barangay, city_municipality_name, province_name]):
                missing_address = []
                if not street: missing_address.append("street")
                if not barangay: missing_address.append("barangay")
                if not city_municipality_name: missing_address.append("city_municipality")
                if not province_name: missing_address.append("province")
                
                return Response({
                    "error": f"Missing address fields: {', '.join(missing_address)}"
                }, status=status.HTTP_400_BAD_REQUEST)
            
            # Ensure OTP was verified before creating account
            if not OTPVerification.objects.filter(email=email, is_used=True).exists():
                return Response({"error": "Email not verified. Please verify your email first."}, status=status.HTTP_400_BAD_REQUEST)
            
            # Check if user already exists
            if User.objects.filter(email=email).exists():
                return Response({"error": "User with this email already exists"}, status=status.HTTP_400_BAD_REQUEST)
            
            # Validate date of birth format
            try:
                dob = datetime.strptime(date_of_birth, "%Y-%m-%d").date()
            except ValueError:
                return Response({"error": "Invalid date format for date of birth. Use YYYY-MM-DD format."}, status=status.HTTP_400_BAD_REQUEST)
            
            # Use database transaction to ensure data consistency
            with transaction.atomic():
                # Get or create Province
                province, created = Province.objects.get_or_create(name=province_name)
                if created:
                    print(f"Created new province: {province_name}")
                
                # Get or create CityMunicipality
                city_municipality, created = CityMunicipality.objects.get_or_create(
                    name=city_municipality_name,
                    province=province,
                    defaults={'zip_code': zip_code or ''}
                )
                if created:
                    print(f"Created new city/municipality: {city_municipality_name}")
                
                # Create Address
                address = Address.objects.create(
                    street=street,
                    barangay=barangay,
                    city_municipality=city_municipality
                )
                print(f"Created address: {address}")
                
                # Create User
                user = User.objects.create_user(
                    username=username or email.split('@')[0],
                    email=email,
                    password=password,
                    first_name=first_name,
                    middle_name=middle_name,
                    last_name=last_name,
                    phone=phone,
                    sex=sex,
                    date_of_birth=dob,
                    contact_number=contact_number,
                    address=address,
                    is_email_verified=True
                )
                print(f"Created user: {user.email}")
                
                # Invalidate all OTP records for this email
                OTPVerification.objects.filter(email=email).update(is_used=True)
                
            return Response({
                "message": "Patient account created successfully",
                "user_id": user.id,
                "email": user.email
            }, status=status.HTTP_201_CREATED)
            
        except Exception as e:
            print(f"Error creating patient account: {str(e)}")
            import traceback
            traceback.print_exc()  # Print full error traceback
            return Response({
                "error": f"An error occurred while creating your account: {str(e)}"
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# Additional utility view to get provinces and cities (optional)
class LocationDataView(APIView):
    permission_classes = [AllowAny]
    
    def get(self, request):
        """Get provinces and their cities for form dropdowns"""
        provinces = Province.objects.prefetch_related('citymunicipality_set').all()
        
        data = []
        for province in provinces:
            cities = [
                {
                    'id': city.id,
                    'name': city.name,
                    'zip_code': city.zip_code
                }
                for city in province.citymunicipality_set.all()
            ]
            
            data.append({
                'id': province.id,
                'name': province.name,
                'cities': cities
            })
        
        return Response(data, status=status.HTTP_200_OK)