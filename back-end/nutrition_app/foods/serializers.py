from dataclasses import field, fields
from rest_framework.serializers import ModelSerializer
from .models import (Category, User, Food)

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__" 

class FoodSerializer(ModelSerializer):
    class Meta:
        model = Food
        fields = "__all__"
        