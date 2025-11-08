from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True, min_length = 8, style = {'input_type': 'password'})
    class Meta:
        model = User
        fields = ['username', 'email','password']
    
    def create(self, validated_data):
        #User.objects.create_user = automatically hash the pwd
        #User.objects.create = its save the pwd in a plain text

        #user = User.objects.create_user(**validated_data) its automatically teke dynamicic data like username etc
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']

        )
        #user = User.objects.create_user(**validated_data)  this uses only you have required filelds to create user not all data
        return user