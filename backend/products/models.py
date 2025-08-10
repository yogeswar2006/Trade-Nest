from django.db import models


from django.contrib.auth.models import User
# Create your models here.

# class Category(models.Model):
#     name=models.CharField( default='All')
    
#     def __str__(self):
#         return self.name

class Category(models.Model):
    name=models.CharField(max_length=25)
    
    
    def __str__(self):
        return self.name    
    


class Product(models.Model):
    host=models.ForeignKey(User,on_delete=models.CASCADE)
    name=models.CharField( null=False)
    category=models.ForeignKey(Category,on_delete=models.CASCADE,blank=True,null=True)
    image = models.ImageField(upload_to='product_images/',blank=True, null=True)
    price=models.IntegerField(null=False)
    description=models.TextField(null=True , max_length=50)
    created=models.DateTimeField(auto_now_add=True,null=True)
    
    
    def __str__(self):
        return self.name
    
class Cart(models.Model):
    host=models.ForeignKey(User,on_delete=models.CASCADE)
    products=models.ForeignKey(Product,on_delete=models.CASCADE)
    quantity=models.PositiveBigIntegerField(default=1)
    
    def subTotal(self):
        return self.products.price*self.quantity
     
    def __str__(self):
        return self.products.name  
    
class ContactInfo(models.Model):
    host=models.ForeignKey(User,on_delete=models.CASCADE ,blank=True,null=True)
    firstname=models.CharField()
    lastname=models.CharField()
    # profileImage=models.ImageField(upload_to='user_images/',blank=True,null=True)
    # brandname=models.CharField()
    mobile=models.BigIntegerField()
    adress=models.CharField()
    # pincode=models.IntegerField()
    # city=models.CharField()
    email=models.EmailField()
    
    
    def __str__(self):
        return self.firstname    
    

    

          
    
    
    
