# Generated by Django 4.1 on 2022-08-28 16:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('apiApp', '0006_rename_crawedarticle_crawledarticle'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pvdata',
            old_name='click_count',
            new_name='pv_count',
        ),
    ]
