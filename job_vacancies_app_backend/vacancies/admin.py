from django.contrib import admin
from .models import Application  # Импортируем вашу модель

admin.site.register(Application)  # Регистрируем модель