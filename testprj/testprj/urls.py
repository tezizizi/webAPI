"""testprj URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from apiApp.urls import router as apiApp_router
from apiApp.apis import RecommendList

urlpatterns = [
    path('admin/', admin.site.urls),

    #path("hello/", include("apiApp.urls")),
    path('api/', include(apiApp_router.urls)),
    path('api/recommends/', RecommendList.as_view()),
    path('upload/', include('apiApp.urls')),
    path('click/', include('apiApp.urls')),
]


