from django.urls import path
from rango import views

urlpatterns = [
    path('', views.home_view, name='home_view'), #when it is empty means it is root url
    ]