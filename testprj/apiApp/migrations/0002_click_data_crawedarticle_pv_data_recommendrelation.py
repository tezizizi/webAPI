# Generated by Django 4.1 on 2022-08-28 12:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiApp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='click_data',
            fields=[
                ('artile_id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('click_count', models.PositiveIntegerField()),
                ('register_date', models.DateTimeField()),
                ('update_date', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='crawedArticle',
            fields=[
                ('article_id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('article_url', models.CharField(max_length=512)),
                ('image_url', models.CharField(max_length=512)),
                ('title', models.CharField(max_length=512)),
                ('register_date', models.DateTimeField()),
                ('update_date', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='pv_data',
            fields=[
                ('artile_id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('click_count', models.PositiveIntegerField()),
                ('register_date', models.DateTimeField()),
                ('update_date', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='recommendRelation',
            fields=[
                ('relation_id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('oroginalArticle_id', models.PositiveIntegerField()),
                ('recommandArticle_id', models.PositiveIntegerField()),
                ('register_date', models.DateTimeField()),
                ('update_date', models.DateTimeField()),
            ],
        ),
    ]
