# Generated by Django 2.1.5 on 2019-03-07 23:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('credentials', '0007_auto_20190307_2317'),
    ]

    operations = [
        migrations.AddField(
            model_name='resume',
            name='email_id',
            field=models.EmailField(default='', max_length=254),
            preserve_default=False,
        ),
    ]
