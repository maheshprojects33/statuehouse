from django.db import models

# Create your models here.
class Hero(models.Model):
    hero_img = models.ImageField(upload_to="hero")
    hero_title_small = models.CharField(max_length=50, blank=True)
    hero_title_big = models.CharField(max_length=50, blank=True)

class Category(models.Model):
    category_img = models.ImageField(upload_to="category", blank=True)
    category_title = models.CharField(max_length=30)
    category_detail = models.CharField(max_length=30)

class Product(models.Model):
    product_img = models.ImageField(upload_to="product", blank=True)
    product_name = models.CharField(max_length=30)
    product_price = models.CharField(max_length=30)
    product_cat = models.CharField(max_length=30)
    product_thumb_top = models.ImageField(upload_to="product/thumb", blank=True, default="")
    product_thumb_center = models.ImageField(upload_to="product/thumb", blank=True, default="")
    product_thumb_bottom = models.ImageField(upload_to="product/thumb", blank=True, default="")