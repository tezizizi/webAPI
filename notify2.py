import slackweb
import schedule
from time import sleep

#from apiApp.models import Recommend

slack = slackweb.Slack(url="https://hooks.slack.com/services/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")

def task():
    # DBからPV数、Click数、レコメンド数を取得
    # pv = Recommend.objects.all()
    message = "pv: 10"
    # slack.notify(text=message)
    print(message)




# schedule.every(3).seconds.do(task) #3秒ごと
# schedule.every().days.at("9:00").do(task) #毎日
# while True:
#     schedule.run_pending()
#     sleep(1)
