from urllib import request
from .models import Recommend         # モデル呼出
from .models import CrawledArticle
from .models import RecommendRelation
from .models import ClickData
from .models import PvData
from rest_framework import generics   # API
from .serializer import HtmlSerializer, RecommendSerializer      # APIで渡すデータをJSON,XML変換
from .serializer import CrawledArticleSerializer
from .serializer import RecommendRelationSerializer
from .serializer import ClickDataSerializer
from .serializer import PvDataSerializer
from rest_framework import viewsets
from rest_framework.response import Response
import random
from django.db.models import Q
from.json2html import Json2Dic
from .models import Html
from django.utils import timezone

# listで返す、使いたくないほうのクラス
class RecommendList(generics.ListAPIView): 
    # APIがデータを返すためのデータ変換ロジックを定義
    serializer_class = CrawledArticleSerializer
    # serializer_class = RecommendRelationSerializer
    # serializer_class = ClickDataSerializer
    # serializer_class = PvDataSerializer

    def get_queryset(self):
        queryset = CrawledArticle.objects.all()
        article_url = self.request.query_params.get('article_url')
        if article_url is not None:
            queryset = queryset.filter(article_url=article_url)
        
        originalArticle_id = str(queryset[0].article_id)

        recommendRalation_queryset = RecommendRelation.objects.all().filter(originalArticle_id=originalArticle_id)
        sampled_queryset = []
        while len(sampled_queryset) < 3: #ランダムで3つとってくる
            choice = random.choice(recommendRalation_queryset)
            if choice not in sampled_queryset:    
                sampled_queryset.append(choice)
        
        article_ids = []
        for i in range(3):
            article_ids.append(sampled_queryset[i].recommendArticle_id)

        crawledArticle_queryset = CrawledArticle.objects.all().filter(Q(article_id=article_ids[0]) | Q(article_id=article_ids[1]) | Q(article_id=article_ids[2]))

        # crawled_queryset = CrawledArticle.objects.get(article_id=article_id)
        # # article_id = recommendRalation_queryset[0]["recommendArticle_id"]

        return Json2Dic.dic2html(crawledArticle_queryset)
    
    # 認証
    permission_classes = []
    

class RecommendArticles(viewsets.ModelViewSet):
    # serializer_class = CrawledArticleSerializer
    # serializer_class = RecommendRelationSerializer
    # serializer_class = ClickDataSerializer
    # serializer_class = PvDataSerializer
    serializer_class = HtmlSerializer

    def pv_counter(self, id):
        data, created = PvData.objects.get_or_create(article_id = id)
        if created:  #データが新しく作られた場合
            data.article_id = id
            data.pv_count = 1
            data.register_date = timezone.now()
            data.update_date = timezone.now()
        else:  #データがすでにある場合、データを更新
            data.pv_count += 1
            data.update_date = timezone.now()
        data.save()

    def get_queryset(self):
        queryset = CrawledArticle.objects.all()
        article_url = self.request.query_params.get('article_url')
        if article_url is not None:
            queryset = queryset.filter(article_url=article_url)
        
        originalArticle_id = str(queryset[0].article_id)
        self.pv_counter(id=originalArticle_id)

        # pv = PvData.objects.all()
        # data = PvData.objects.get(article_id=1)
        # print(data)
        recommendRalation_queryset = RecommendRelation.objects.all().filter(originalArticle_id=originalArticle_id)
        sampled_queryset = []
        while len(sampled_queryset) < 3: #ランダムで3つとってくる
            choice = random.choice(recommendRalation_queryset)
            if choice not in sampled_queryset:    
                sampled_queryset.append(choice)
        
        article_ids = []
        for i in range(3):
            article_ids.append(sampled_queryset[i].recommendArticle_id)

        crawledArticle_queryset = CrawledArticle.objects.all().filter(Q(article_id=article_ids[0]) | Q(article_id=article_ids[1]) | Q(article_id=article_ids[2]))

        html = Html(html=Json2Dic.dic2html(crawledArticle_queryset), css=Json2Dic.append_css())
        # html = Html(html=Json2Dic.dic2html(crawledArticle_queryset))
        # 力技でJsonを作ろう
        return_queryset = []
        return_queryset.append(html)

        return return_queryset

class ArticleViewSet(viewsets.ModelViewSet):#Model:編集可、ReadOnly:参照のみ
    queryset = CrawledArticle.objects.all()
    # serializer_class = RecommendSerializer
    #filter_backends = (filters.DjangoFilterBackend,)

    # filter_class = RecommendFilter
    def get(self, request):
        a = ["hello"]
        return Response(a)