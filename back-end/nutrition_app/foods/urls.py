from django.urls import path, include 
from rest_framework import routers
from .views import (UserViewSet, FoodViewSet)

router = routers.DefaultRouter()
router.register("users", UserViewSet)
router.register("foods", FoodViewSet)

urlpatterns = [
    path("", include(router.urls))
]