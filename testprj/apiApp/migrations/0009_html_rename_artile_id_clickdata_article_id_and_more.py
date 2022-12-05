# Generated by Django 4.1 on 2022-08-30 08:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiApp', '0008_rename_oroginalarticle_id_recommendrelation_originalarticle_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Html',
            fields=[
                ('html', models.CharField(max_length=512, primary_key=True, serialize=False)),
                ('css', models.CharField(max_length=512)),
            ],
        ),
        migrations.RenameField(
            model_name='clickdata',
            old_name='artile_id',
            new_name='article_id',
        ),
        migrations.RenameField(
            model_name='pvdata',
            old_name='artile_id',
            new_name='article_id',
        ),
    ]