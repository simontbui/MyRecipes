from django.urls import path
from . import views

urlpatterns = [
    path("recipes/", views.recipes),
    path("user/", views.user_details),
]