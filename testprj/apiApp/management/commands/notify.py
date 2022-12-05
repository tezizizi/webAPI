from calendar import c
from django.core.management.base import BaseCommand
from apiApp.models import ClickData, CrawledArticle, Recommend
import slackweb
import schedule
from time import sleep
import json
from apiApp.models import PvData
from operator import itemgetter
class Command(BaseCommand):
        help = "slack 通知"

        def handle(self, *args, **options):
            slack = slackweb.Slack(url="https://hooks.slack.com/services/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")

            def task():
                #pv1 = Recommend.objects.get(id=1) # 1つだけ取ってくる
                #pv2 = Recommend.objects.all().values("id") # idの列の値だけ取ってくる
                #pv3 = Recommend.objects.all().filter(code=1) # code=1の値だけ取ってくる
                # pvを無理やりJSONか何かに変換する
                #pv = str(pv1)
                #message = json.dumps({"pv": pv})
                pvdatas = PvData.objects.all()
                clickdatas = ClickData.objects.all()
                #print(data)
                articles = []
                for data in pvdatas:
                    #print(data,data.article_id)
                    articles.append(CrawledArticle.objects.get(article_id=data.article_id))
                    #print(articles[0].article_url)
                    # message = pv3
                pv_list = []
                url_list = []
                click_list =[]
                for d in pvdatas:
                    pv_list.append(d.pv_count)
                for d in clickdatas:
                    click_list.append(d.click_count)
                for d in articles:
                    url_list.append(d.article_url)
                #dic = dict(zip(url_list,pv_list,click_list))
                zip_list = zip(pv_list,click_list,url_list)
                zip_sort = sorted(zip_list,reverse=True)
                pv_list,click_list,url_list = zip(*zip_sort)
                message = 'pv_rank\n'
                for i in range(5):
                    message += 'url:{article_url}, pv_count : {pv_count}, click_count : {click_count}\n'.format(article_url=url_list[i],pv_count=pv_list[i], click_count=click_list[i])
                zip_list = zip(click_list,pv_list,url_list)
                zip_sort = sorted(zip_list,reverse=True)
                click_list,pv_list,url_list = zip(*zip_sort)
                message += "click_rank\n"
                for i in range(5):
                    message += 'url:{article_url}, pv_count : {pv_count}, click_count : {click_count}\n'.format(article_url=url_list[i],pv_count=pv_list[i], click_count=click_list[i])

                slack.notify(text=message)
                #print(data)
                #schedule.every(3).seconds.do(task)
            task()
        #while True:
        #    schedule.run_pending()
        #    sleep(1)
