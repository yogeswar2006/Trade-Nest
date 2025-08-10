from django.shortcuts import render
from accounts.serializers import UserSerializer
from rest_framework import generics,viewsets
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view

# Create your views here.


class RegisterView(generics.CreateAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    permission_classes=[AllowAny]



class ProtectedViewEndpoint(APIView):
    permission_classes=[IsAuthenticated]
    
    def get(self,request):
        response={
            'status':'secret info fectched!'
        }
        
        return Response(response)
    
    
@api_view(['GET'])    
def User_info(request):
    user=request.user
    return Response({
        'id':user.id,
        'username':user.username,
        
        
    })
      