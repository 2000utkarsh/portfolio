# Generated by Django 2.1.5 on 2019-02-13 00:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('credentials', '0002_resume_contact'),
    ]

    operations = [
        migrations.AlterField(
            model_name='qualifications',
            name='link',
            field=models.TextField(),
        ),
    ]