from rest_framework import serializers
from .models import ClickData, CrawledArticle, PvData, Recommend, RecommendRelation, Html

class RecommendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recommend # 扱う対象のモデル名を設定する
        fields = '__all__' # レスポンスしたいモデルフィールド
    
class CrawledArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = CrawledArticle
        fields = '__all__'

class RecommendRelationSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecommendRelation
        fields = '__all__'

class ClickDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClickData
        fields = '__all__'

class PvDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = PvData
        fields = '__all__'

class HtmlSerializer(serializers.ModelSerializer):
    class Meta:
        model = Html
        fields = '__all__'