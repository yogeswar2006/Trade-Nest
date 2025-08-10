from django.contrib import admin

# Register your models here.
from .models import Product,Cart,Category,ContactInfo



admin.site.register(Product)
admin.site.register(Cart)
admin.site.register(Category)
admin.site.register(ContactInfo)

