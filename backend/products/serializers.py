from rest_framework import serializers
from .models import Product,Cart,Category,ContactInfo
from PIL import Image


class ProductSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)
    class Meta:
        model = Product
        fields = "__all__"
        
    def validate_image(self, image):
       

        img = Image.open(image)
        max_width = 1024
        max_height = 1024
        if img.width > max_width or img.height > max_height:
            raise serializers.ValidationError(
                f"Image dimensions should not exceed {max_width}x{max_height} pixels"
            )
        return image


class CartSerializer(serializers.ModelSerializer):
    products = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all(),write_only=True)
    product_details=ProductSerializer(source='products',read_only=True)
    class Meta:
        model=Cart
        fields='__all__'
        
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields='__all__'     
        
class ContactInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model=ContactInfo
        fields='__all__'          