from django.db import models
from pictures.models import PictureField


class User (models.Model):
    user_name = models.CharField(max_length=50)
    password = models.CharField(max_length=11)

    def __str__(self) -> str:
        return self.user_name

class Food (models.Model):
    food_name = models.CharField(max_length=80)
    food_price = models.DecimalField(max_digits=10, decimal_places=2)
    calories_per_serving = models.DecimalField(max_digits=6, decimal_places=1)
    food_description = models.TextField()
    recipe_link = models.CharField(max_length=200)
    food_image = PictureField(upload_to="foodImages")
