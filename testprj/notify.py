import slackweb
import schedule
from time import sleep

from apiApp.models import Recommend

slack = slackweb.Slack(url="https://hooks.slack.com/services/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")

def task():
    # DBからPV数、Click数、レコメンド数を取得
    # message = 
    # slack.notify(text="Pythonからslackへ通知する")
    pv = Recommend.objects.all()
    print(pv)

task()
# schedule.every(3).seconds.do(task)

# while True:
#     schedule.run_pending()
#     sleep(1)