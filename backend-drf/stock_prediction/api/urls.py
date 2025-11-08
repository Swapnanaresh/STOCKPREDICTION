from django.urls import path
from accounts import views as UserViews

print(">>> Loading api urls.py")

urlpatterns = [

    path('register/', UserViews.RegisterView.as_view()),
    
]