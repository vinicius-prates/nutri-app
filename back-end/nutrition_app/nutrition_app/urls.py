from pictures.conf import get_settings
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('foods.urls'))
]

urlpatterns += [
        path("_pictures/", include("pictures.urls")),
    ]