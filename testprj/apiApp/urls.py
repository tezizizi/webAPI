from django.urls import path
#from . import views
from rest_framework import routers
from .views import RecommendViewSet, Simple
from .apis import RecommendArticles, ArticleViewSet
# from .apis import api

router = routers.DefaultRouter()
router.register(r'articles', RecommendArticles, "articles")
# router.register(r'articles', Simple, "articles")

# router.register(r'recommends', .as_view())

from . import views
 
urlpatterns = [
    path('templates/', views.upload, name='upload'),
]