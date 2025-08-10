from django.shortcuts import render
from rest_framework import viewsets,filters
from .models import Product ,Cart,Category,ContactInfo
from .serializers import ProductSerializer,CartSerializer,CategorySerializer,ContactInfoSerializer
import os
RAZORPAY_KEY_ID = os.getenv("RAZORPAY_KEY_ID")
RAZORPAY_KEY_SECRET = os.getenv("RAZORPAY_KEY_SECRET")

# Create your views here.

class ProductView(viewsets.ModelViewSet):
   
    serializer_class=ProductSerializer
    filter_backends=[filters.SearchFilter]
    search_fields=['name','description','category__name']
    
    def get_queryset(self):
        host_id = self.request.query_params.get('host')
        if host_id:
            return Product.objects.filter(host=host_id).order_by('-created')
        return Product.objects.all().order_by('-created')
    
    queryset=Product.objects.all().order_by('-created')
    
    
class CartView(viewsets.ModelViewSet):
    serializer_class=CartSerializer
    lookup_field='id'
    filter_backends=[filters.SearchFilter]
    search_fields=['products__name','products__description']
    
    def get_queryset(self):
        host_id=self.request.query_params.get('host')
        if host_id:
            return Cart.objects.filter(host=host_id).select_related('products')
        return Cart.objects.all()
    
    queryset=Cart.objects.all()
     
class CategoryView(viewsets.ModelViewSet):
    serializer_class=CategorySerializer
    queryset=Category.objects.all()  
    
class ContactInfoView(viewsets.ModelViewSet):
    queryset=ContactInfo.objects.all()
    serializer_class=ContactInfoSerializer  
    
import razorpay
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

@csrf_exempt
def create_order(request):
    client = razorpay.Client(auth=(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET))
    payment = client.order.create({
        "amount": 50000,  # 500.00 INR
        "currency": "INR",
        "payment_capture": 1
    })
    return JsonResponse(payment)
        
