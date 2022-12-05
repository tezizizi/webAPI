from django.db import models
from django.shortcuts import render
#testprj.settings.cofigure()
from apiApp.models import CrawledArticle
from apiApp.models import RecommendRelation
import csv
from io import TextIOWrapper, StringIO

def upload_crawled_article(filename):
    with open(filename, "r") as f:
#        #form_data = TextIOWrapper(request.FILES['csv'].file, encoding='utf-8')
        csv_file = csv.reader(f)
        header = next(csv_file)
        for line in csv_file:
            crawled_article = CrawledArticle(line[0],line[1],line[2],line[3],line[4],line[5])
            #crawled_article, created = CrawledArticle.objects.get_or_create(article_id=line[0])
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

def upload_recommend_relation(filename):
    with open(filename) as f:
#        #form_data = TextIOWrapper(request.FILES['csv'].file, encoding='utf-8')
        csv_file = csv.reader(f)
        header = next(csv_file)
        for line in csv_file:
            recommend_relation = RecommendRelation(line[0],line[1],line[2],line[3],line[4])
            #recommend_relation, created = RecommendRelation.objects.get_or_create(relation_id=line[0],originalArticle_id=line[1])
            #recommend_relation.relation_id = line[0]
            #recommend_relation.originalArticle_id = line[1]
            #recommend_relation.recommendArticle_id = line[2]
            #recommend_relation.register_date = line[3]
            #recommend_relation.update_date = line[4]
            recommend_relation.save()

#filename_crawled = './crawled_article_test.csv'
#filename_recommend = './recommend_relation_test.csv'
#upload_crawed_article(filename_crawled)
#upload_recommend_relation(filename_recommend)