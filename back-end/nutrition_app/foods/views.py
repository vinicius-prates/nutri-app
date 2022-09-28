from django.shortcuts import render

from .models import (User, Food)
from rest_framework.viewsets import ModelViewSet
from .serializers import (UserSerializer, FoodSerializer)

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class  = UserSerializer

class FoodViewSet(ModelViewSet):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer
    