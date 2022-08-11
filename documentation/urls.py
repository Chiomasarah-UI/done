from django.urls import path

from . import views


app_name = "documentation"

urlpatterns = [
    path('', views.displayDocumentation, name='documentation')   
]