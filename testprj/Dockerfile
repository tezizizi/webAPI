FROM python:3
ENV PYTHONBURRERED=1
WORKDIR /django
COPY requirements.txt requirements.txt
RUN pip install --upgrade pip && pip install -r requirements.txt