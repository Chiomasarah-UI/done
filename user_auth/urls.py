from django.urls import path
from re import template
from xml.dom.minidom import Document
from django.conf import settings
from django.contrib import admin
from django.conf.urls.static import static
from . import views
from django.contrib.auth import views as auth_views
from . import views


app_name = 'user_auth'

urlpatterns = [
    path('', views.signin, name='signin'),
    path('signout/', views.signout, name='signout'),
    path('signup/',views.signup, name='signup' ),


    path('password_change/done/', auth_views.PasswordChangeDoneView.as_view(template_name='user_auth/password_change_done.html'), 
        name='password_change_done'),

    path('password_change/', auth_views.PasswordChangeView.as_view(template_name='user_auth/password_change.html'), 
        name='password_change'),

    path('password_reset/', auth_views.PasswordResetView.as_view(template_name='user_auth/password_reset.html',), name='password_reset'), 

    path('password_reset/done/', auth_views.PasswordResetDoneView.as_view(template_name='user_auth/password_reset_done.html'),
     name='password_reset_done'),

    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name='user_auth/password_reset_confirm.html' ), 
        name='password_reset_confirm'),

    path('reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name='user_auth/password_reset_complete.html'),
     name='password_reset_complete'),

]