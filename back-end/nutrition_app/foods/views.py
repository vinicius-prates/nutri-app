from django.shortcuts import render

from .models import (Category, User, Food)
from rest_framework.viewsets import ModelViewSet
from .serializers import (CategorySerializer, UserSerializer, FoodSerializer)

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class  = UserSerializer

class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class FoodViewSet(ModelViewSet):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer
    