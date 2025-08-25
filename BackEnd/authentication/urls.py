
# urls.py (in your authentication app)
from django.urls import path
from .views import SendOTPView, VerifyOTPView, CompleteSignupView, LocationDataView

urlpatterns = [
    path('send-otp/', SendOTPView.as_view(), name='send-otp'),
    path('verify-otp/', VerifyOTPView.as_view(), name='verify-otp'),
    path('complete-signup/', CompleteSignupView.as_view(), name='complete-signup'),
    path('locations/', LocationDataView.as_view(), name='location-data'),  # Optional
]