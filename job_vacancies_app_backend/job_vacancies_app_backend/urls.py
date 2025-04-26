from django.contrib import admin
from django.urls import path, include
from vacancies.views import ApplicationCreateView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/applications/', ApplicationCreateView.as_view(), name='application-create'),
]
