# Generated by Django 4.2.1 on 2023-05-21 11:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='profession',
            field=models.CharField(blank=True, choices=[('Employee', 'Employee'), ('Business', 'Business'), ('Student', 'Student'), ('Other', 'Other')], max_length=10),
        ),
    ]
