from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone
import random
import string

class User(AbstractUser):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30)
    middle_name = models.CharField(max_length=30, blank=True, null=True)  # Optional middle name
    last_name = models.CharField(max_length=30)
    phone = models.CharField(max_length=15, blank=True)
    is_email_verified = models.BooleanField(default=False)
    sex = models.CharField(max_length=1, choices=[('M', 'Male'), ('F', 'Female')], blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    contact_number = models.CharField(max_length=15, blank=True)
    address = models.ForeignKey('Address', on_delete=models.SET_NULL, null=True, blank=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

class Province(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class CityMunicipality(models.Model):
    name = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=10, blank=True)
    province = models.ForeignKey(Province, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name

class Address(models.Model):
    street = models.CharField(max_length=200)
    barangay = models.CharField(max_length=100)
    city_municipality = models.ForeignKey(CityMunicipality, on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.street}, {self.barangay}, {self.city_municipality.name}"

class OTPVerification(models.Model):
    email = models.EmailField()
    otp_code = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now_add=True)
    is_used = models.BooleanField(default=False)
    expires_at = models.DateTimeField()
    
    def save(self, *args, **kwargs):
        if not self.expires_at:
            self.expires_at = timezone.now() + timezone.timedelta(minutes=10)
        super().save(*args, **kwargs)
    
    def is_expired(self):
        return timezone.now() > self.expires_at
    
    @staticmethod
    def generate_otp():
        return ''.join(random.choices(string.digits, k=6))
    
    class Meta:
        ordering = ['-created_at']

def send_otp(email):
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
    from django.core.mail import send_mail
    from django.conf import settings
    send_mail(
        subject="Your OTP Code - BukCare",
        message=f"Your OTP code is {otp_code}. It will expire in 10 minutes.",
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[email],
    )
    
    return otp
