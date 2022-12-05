FROM python:3
ENV PYTHONBURRERED=1
WORKDIR /django
COPY requirements.txt requirements.txt
RUN pip install --upgrade pip && pip install -r requirements.txt
RUN apt-get update
RUN apt-get install -y cron
RUN apt-get install -y vim
#RUN apt-get install -y crontab
COPY crontab /var/spool/cron/crontabs/root
