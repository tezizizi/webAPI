# intern-web​
# 本番環境で動くものです。develop から変更しました。
# 変更箇所
- requirements.txt にinstall するものをまとめました。

- Dockerfile 

cron用に追加
```
RUN apt-get update
RUN apt-get install -y cron
RUN apt-get install -y vim
COPY crontab /var/spool/cron/crontabs/root
```

- docker-compose.yml

23,26 行目のポート番号を変更する
```
command: python3 manage.py runserver 0.0.0.0:80
    working_dir: /code
    ports:
      - 80:80
```
29,30 行目をコメントアウト
``` 
#depends_on:
    #- "db"
```
## webapp1 
- testprj/setting.py

29 
```
ALLOWED_HOSTS = ["150.95.62.226", "150.95.46.64"]
```
96
```
 'HOST': '192.168.0.3' 
```
webapp1のIPアドレスとロードバランサーのIPアドレス
db1のIPアドレスを登録
## webapp2 
- testprj/setting.py

29
```
ALLOWED_HOSTS = ["150.95.62.229", "150.95.46.64"]
```
96 
```
 'HOST': '192.168.0.3' 
```
webapp2のIPアドレスとロードバランサーのIPアドレス
db1のIPアドレスを登録

## webapp1, webapp2
上記が本番環境用に変更必須な部分です。
その他、機能面で apiApp内の apis.py, urls.py, json2html.py, management/commands/notify.py と testprj内の urls.py を変更しました。 

# 使い方​
dbサーバを先に立ち上げる。
## db1
データベースの立ち上げ

```
cd intern-web/testprj/mysql
mkdir DB
cd ..
sudo docker-compose build
sudo docker-compose up -d db
```
データ格納

コンテナ内に入りDBを作り、dump.txt からデータベースに読み込む
```
sudo docker exec -it db mysql -uroot -p1234 CREATE DB;
exit
cp /dump.txt /intern-web/testprj/mysql/DB/
sudo docker exec -it db mysql -uroot -p1234 DB < /var/lib/mysql/dump.txt
```
データ確認

```
sudo docker exec -it db mysql -uroot -p1234 DB
USE DB;
SHOW TABLES;
SELECT * FROM apiApp_crawledarticle;
```
## webapp1,webapp2
サーバ立ち上げ
```
cd intern-web/testprj
sudo docker-compose build
sudo docker-compose up web
```

## webapp2
cron の設定 （root で実行）

cron で実行するコードをコピー

cronで実行されるコードの確認 /intern-web/testprj/crontab と同じコードが表示されていればOK  

cron 開始
```
sudo su -
cp /intern-web/testprj/crontab /var/spool/cron/crontabs/root
crontab -l 
/etc/init.d/cron start
```

# tejima
インターンお疲れ様でした。手島です。
本番環境で使用したコードを上げました。
何かあれば下記にご連絡ください。

h-tejima@ist.osaka-u.ac.jp
