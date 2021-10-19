from django.shortcuts import render
from rest_framework import serializers
# Create your views here.
from drfapp.serializers import StudentSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from drfapp.models import Student

class TestView(APIView):

    def get(self, request, *args, **kwargs):
        qs =Student.objects.all()
        serializers = StudentSerializer(qs, many=True)
        return Response(serializers.data) #when a user try to access api using get -> return serializer 
    
    def post(self, request, *args, **kwargs):
        serializers = StudentSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        return Response(serializers.errors)
        