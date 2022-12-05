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
from.json2html import Json2Dic
from .models import Html
from django.utils import timezone

class ClickCounter():
    def save_query(self):
        # 記事url とる
        url = self.request.query_params.get('url')  # 適当
        article, created = CrawledArticle.objects.get_or_create(article_url = url)
        article_id = article.article_id

        data, created= PvData.objects.get_or_create(article_id = article_id)
        if created:  #データが新しく作られた場合
            data.article_id = article_id
            data.click_count = 1
            data.register_date = timezone.now()
            data.update_date = timezone.now()
        else:  #データがすでにある場合、データを更新
            data.click_count += 1
            data.update_date = timezone.now()
        data.save()