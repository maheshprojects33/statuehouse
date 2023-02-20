from django.contrib import admin
from .models import *


# Register your models here.
class HeroAdmin(admin.ModelAdmin):
    list_display = ("hero_title_big", "hero_title_small", "hero_img")


admin.site.register(Hero, HeroAdmin)


class CategoryAdmin(admin.ModelAdmin):
    list_display = ("category_title", "category_detail", "category_img")


admin.site.register(Category, CategoryAdmin)


class ProductAdmin(admin.ModelAdmin):
    list_display = ("product_name", "product_price", "product_cat", "product_img", "product_thumb_top",
                    "product_thumb_center", "product_thumb_bottom")


admin.site.register(Product, ProductAdmin)
