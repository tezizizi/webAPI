from http.client import HTTPResponse
from urllib import request
from .models import Recommend
from rest_framework import viewsets, generics, status
from rest_framework.response import Response
from .serializer import RecommendSerializer
from django_filters import rest_framework as filters

# Create your views here.
#def index(request):
#   return HttpResponse("Hello! Python & Django!")

class Simple(viewsets.ViewSet):
    def sample(request):
        return HTTPResponse("hello")

# 実は使ってない
class RecommendFilter(filters.FilterSet):
    # filterの定義
    code = filters.CharFilter(lookup_expr='exact')
    id_gt = filters.NumberFilter(field_name='id', lookup_expr='gt')

    class Meta:
        model = Recommend
        # filterを列挙
        fields = ['code', 'id_gt']

# class ArticleViewSet(viewsets.ModelViewSet):#Model:編集可、ReadOnly:参照のみ
#     queryset = CrawledArticle.objects.all()
#     # serializer_class = RecommendSerializer
#     #filter_backends = (filters.DjangoFilterBackend,)

#     # filter_class = RecommendFilter
#     def get(self, request):
#         a = "hello"
#         return Response(a)


class RecommendViewSet(viewsets.ModelViewSet):
    def list(self, request):
        codes = Recommend.objects.filter(
            name__icontains=request.query_params.get('code')
        )
        return Response({"code": codes}, status=status.HTTP_201_CREATED)


#データセットアップロード
#from apiApp.csv2db import upload_crawed_article, upload_recommend_relation
from django.shortcuts import render
import csv
from io import TextIOWrapper, StringIO
from .models import CrawledArticle,RecommendRelation
from .forms import UploadFileForm
def upload_crawled_article(csv_file):
#    with open(filename) as f:
#        #form_data = TextIOWrapper(request.FILES['csv'].file, encoding='utf-8')
#        csv_file = csv.reader(f)
        header = next(csv_file)
        for line in csv_file:
            crawled_article = CrawledArticle(line[0],line[1],line[2],line[3],line[4],line[5])
            #crawled_article, created = CrawledArticle.objects.get_or_create(article_id=line[1])
            #crawled_article.article_id = line[0]
            #crawled_article.article_url = line[1]
            #crawled_article.image_url = line[2]
            #crawled_article.title = line[3]
            #crawled_article.register_date = line[4]
            #crawled_article.update_date = line[5]
            crawled_article.save()

        #return render(request, 'YpurApp/upload.html')

    #else:
        #return render(request, 'YourApp/upload.html')

def upload_recommend_relation(csv_file):
#    with open(filename) as f:
#        #form_data = TextIOWrapper(request.FILES['csv'].file, encoding='utf-8')
#        csv_file = csv.reader(f)
        header = next(csv_file)
        for line in csv_file:
            data = RecommendRelation(line[0],line[1],line[2],line[3],line[4])
            #recommend_relation, created = RecommendRelation.objects.get_or_create(relation_id=line[0])
            #recommend_relation.relation_id = line[0]
            #recommend_relation.originalArticle_id = line[1]
            #recommend_relation.recommendArticle_id = line[2]
            #recommend_relation.register_date = line[3]
            #recommend_relation.update_date = line[4]
            data.save()
def upload(request):
    print("upload")
    form = UploadFileForm(request.POST, request.FILES)
    if 'csv' in request.FILES:
        form_data = TextIOWrapper(request.FILES['csv'].file, encoding='utf-8')
        csv_file = csv.reader(form_data)
        header = next(csv_file)
        if len(header) == 5:
            upload_recommend_relation(csv_file)
        elif len(header) == 6:
            upload_crawled_article(csv_file)

        return render(request, 'upload.html', {'form': form})

    else:
        form = UploadFileForm(request.POST, request.FILES)
        return render(request, 'upload.html', {'form': form})