from django.shortcuts import render
from .models import *
import re


# Create your views here.
def home(request):
    hero = Hero.objects.all()
    category = Category.objects.all()
    product = Product.objects.all()

    return render(request, "index.html", {
        "hero": hero,
        "category": category,
        "product": product
    })


def product(request, pk):
    product = Product.objects.get(id=pk)
    return render(request, "product.html", {"product": product})


def gallery(request):
    product = Product.objects.all()
    url_path = request.path
    url_path = re.sub(r'\d+', '', url_path)
    return render(request, "gallery.html", {"product": product, "url_path": url_path})

# def base(request):
#     return render(request, "base.html")