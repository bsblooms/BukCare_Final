from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from .models import User, OTPVerification

class SendOTPSerializer(serializers.Serializer):
    email = serializers.EmailField()
    
    def validate_email(self, value):
        # Check if user already exists with this email
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("User with this email already exists.")
        return value

class VerifyOTPSerializer(serializers.Serializer):
    email = serializers.EmailField()
    otp = serializers.CharField(max_length=6, min_length=6)
    
    def validate(self, data):
        email = data.get('email')
        otp = data.get('otp')
        
        try:
            otp_record = OTPVerification.objects.filter(
                email=email,
                otp_code=otp,
                is_used=False
            ).latest('created_at')
            
            if otp_record.is_expired():
                raise serializers.ValidationError("OTP has expired.")
                
        except OTPVerification.DoesNotExist:
            raise serializers.ValidationError("Invalid OTP.")
        
        return data

class CompleteSignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, validators=[validate_password])
    confirm_password = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = ['email', 'first_name', 'last_name', 'phone', 'password', 'confirm_password']
    
    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError("Passwords do not match.")
        return data
    
    def validate_email(self, value):
        # Check if OTP was verified for this email
        if not OTPVerification.objects.filter(email=value, is_used=True).exists():
            raise serializers.ValidationError("Email not verified. Please verify your email first.")
        return value
    
    def create(self, validated_data):
        validated_data.pop('confirm_password')
        password = validated_data.pop('password')
        
        # Generate unique username from email
        email = validated_data['email']
        username = email.split('@')[0]
        counter = 1
        original_username = username
        while User.objects.filter(username=username).exists():
            username = f"{original_username}{counter}"
            counter += 1
        
        user = User.objects.create_user(
            username=username,
            password=password,
            is_email_verified=True,
            **validated_data
        )
        return user