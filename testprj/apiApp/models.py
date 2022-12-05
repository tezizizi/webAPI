from django.db import models

# Create your models here.
class Recommend(models.Model):
    code = models.CharField(max_length=100)
    article = models.CharField(max_length=100)

    def __str__(self):
        return self.code

#データベース作成
CHAR_LENGTH = 512

class CrawledArticle(models.Model):
    article_id = models.PositiveIntegerField(primary_key=True) #2. idを取得　#5. レコメンドのid
    article_url = models.CharField(max_length=CHAR_LENGTH,unique=True) #1. これが飛んでくる #6. 下3つを取得
    image_url = models.CharField(max_length=CHAR_LENGTH)
    title = models.CharField(max_length=CHAR_LENGTH)
    register_date = models.DateTimeField()
    update_date = models.DateTimeField()

    def __str__(self):
       return self.article_url

class RecommendRelation(models.Model):
    relation_id = models.PositiveIntegerField(primary_key=True)
    originalArticle_id = models.PositiveIntegerField() #3. article_idと一緒
    recommendArticle_id = models.PositiveIntegerField() #4. レコメンドのidを取得
    register_date = models.DateTimeField()
    update_date = models.DateTimeField()
#%YYYY-MM-DD HH:MM%

    def __str__(self):
       return str(self.recommendArticle_id)

class ClickData(models.Model):
    article_id = models.PositiveIntegerField(primary_key=True)
    click_count = models.PositiveIntegerField()
    register_date = models.DateTimeField()
    update_date = models.DateTimeField()
    
    def __str__(self):
        return self.click_count

class PvData(models.Model):
    article_id = models.PositiveIntegerField(primary_key=True)
    pv_count = models.PositiveIntegerField()
    register_date = models.DateTimeField()
    update_date = models.DateTimeField()

    # def __str__(self):
    #     return self.pv_count

class Html(models.Model):
    html = models.CharField(max_length=CHAR_LENGTH,primary_key=True)
    css =  models.CharField(max_length=CHAR_LENGTH)

    def __str__(self):
        return self.html