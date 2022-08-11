"""anima_lib_team_91 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.urls import include


urlpatterns = [
    path('admin/', admin.site.urls),                        # admin
    path('auth/', include('home.urls')),                         # base app for the website
    path('', include('user_auth.urls')),               # for user authentication (e.g, signing in, signing up, signing out)
    path('documentation/', include('documentation.urls')),   # path to the documentation app
    path('animation/', include('animation.urls')), # path to the animation app
    path('', include('django.contrib.auth.urls')),
]
