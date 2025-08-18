from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from .forms import CustomUserCreationForm
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.decorators import login_required

def signup_view(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)  # Auto-login after sign up
            return redirect('dashboard')
    else:
        form = CustomUserCreationForm()
    return render(request, 'users/signup.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('dashboard')
    else:
        form = AuthenticationForm()
    return render(request, 'users/login.html', {'form': form})

@login_required
def dashboard_view(request):
    if request.user.role == 'doctor':
        return render(request, 'users/dashboard_doctor.html')
    elif request.user.role == 'patient':
        return render(request, 'users/dashboard_patient.html')
    elif request.user.role == 'staff':
        return render(request, 'users/dashboard_staff.html')
