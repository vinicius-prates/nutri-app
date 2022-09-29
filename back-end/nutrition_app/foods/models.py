from unicodedata import category
from django.db import models
from pictures.models import PictureField


class User (models.Model):
    user_name = models.CharField(max_length=50)
    password = models.CharField(max_length=11)

    def __str__(self) -> str:
        return self.user_name


class Category (models.Model):
    category = models.CharField(max_length=60)

    def __str__(self) -> str:
        return self.category

class Food (models.Model):
    food_name = models.CharField(max_length=80)
    food_price = models.DecimalField(max_digits=10, decimal_places=2)
    calories_per_serving = models.DecimalField(max_digits=6, decimal_places=1)
    food_description = models.TextField()
    category = models.ForeignKey(Category, on_delete = models.DO_NOTHING)
    recipe_link = models.CharField(max_length=200)
    food_image = PictureField(upload_to="foodImages")
    created_at = models.DateField(auto_now=True)

    def __str__(self) -> str:
        return self.food_name