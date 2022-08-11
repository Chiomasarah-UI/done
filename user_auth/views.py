from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.urls import reverse

# from .models import User
from .forms import SigninUserForm


# Create your views here.

def signin(request):
    if request.user.is_authenticated:                                               # if user is already signed in
        return redirect(reverse('home:home'))
    if request.method == 'POST':                                                    # after user submit the sign in form [POST]
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect(reverse('home:home'))
        else:
            messages.error(request, 'Invalid login details. Try Again!')
            # messages.success(request, ('Invalid login details, try again!'))
            return redirect(reverse('user_auth:signin'))
    else:                                                                           # if user submit a GET request
        form = SigninUserForm()
    return render(request, 'user_auth/signin.html', {'form': form})


# @login_required                                                                     # you must be logged in before you can signout
def signout(request):
    logout(request)
    messages.success(request, "Logged out successfully!")
    return redirect('home:home')


def signup(request):
    if request.user.is_authenticated:                                               # i.e user is already logged in
        return redirect(reverse('home:home'))
    if request.method == "POST":                                                    # when user submits the login form
        username = request.POST['username']
        email = request.POST['email']
        pass1 = request.POST['pass1']

        if User.objects.filter(username=username):
            messages.error(
                request, "username already exist! please try another username")
            return redirect(reverse('user_auth:signup'))

        if User.objects.filter(email=email):
            messages.error(request, "Email already registered!")
            return redirect(reverse('user_auth:signup'))

        if len(username) > 15:
            messages.error(request, "username must be under 15 characters!")
            return redirect(reverse('user_auth:signup'))

        if not username.isalnum():
            messages.error(request, "Username can only contain alphabets or numerical characters")
            return redirect(reverse('user_auth:signup'))

        myuser = User.objects.create_user(username, email, pass1)

        myuser.save()

        messages.success(
            request, "Your account has been successfully created.")

        return redirect(reverse('home:home'))

    return render(request, "user_auth/signup.html")

