from django.urls import path,include
from accounts import views as Userviews
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView 
from products import views as ProductViews
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register('Products',ProductViews.ProductView)
router.register('cart',ProductViews.CartView)
router.register('category',ProductViews.CategoryView)
router.register('contact',ProductViews.ContactInfoView)


urlpatterns=[
    path('register/',Userviews.RegisterView.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    path('protected/',Userviews.ProtectedViewEndpoint.as_view()),
    
    path('create_order/',ProductViews.create_order,name='create_order'),
    
   path('user/',Userviews.User_info),
   
   path('product/',include(router.urls)),
   

]