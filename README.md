# intern-web​
​
​

hirano update test​

hirano update 2​

=======​

# インストールしたもの​

pip install djangorestframework​

pip install django-filter​

pip install django-cors-headers

​
​

# 使い方​

python manage.py runserver​

でローカルにサーバーが立つ　（http://127.0.0.1:8000/）​

​
​

http://127.0.0.1:8000/admin​

でデータを追加できる​

​
​

http://127.0.0.1:8000/article/articles​

または​

curl -X GET http://127.0.0.1:8000/api/articles/​

または​

curl -X GET http://127.0.0.1:8000/api/recommends/​

で全データがJSONで返ってくる​

​
​

http://127.0.0.1:8000/api/articles/?article_url=

でDB内のデータが返ってくる​

​
​
# Docker
testprjで

​docker-compose build

docker-compose up -d

cp dump.txt mesql/DB

# コンテナの中に入る

docker exec -it web bash

docker exec -it db mysql -uroot -p1234 DB

mysql -uroot -p1234 DB < /var/lib/mysql/dump.txt

# migrate


# DB作る

python3 manage.py shell

from apiApp.csv2db import upload_crawled_article

upload_crawled_article("./crawled_article_test.csv")

insert into apiApp_pvdata values(1,0,'2022-08-30 17:00','2022-08-30 17:00');

# slack通知​

pip install slackweb​

pip install schedule​

​


# 使い方​

python manage.py notify​

​
​

# もしくはcronでも定期的にコマンド実行できる?​

>>>>>>> fb858f77fc39d5b3059a969d3283d3f31c31468e​

​
​

​