# Generated by Django 3.1.4 on 2021-01-17 18:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bills', '0001_initial'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='bill',
            unique_together={('bill_type', 'month_of_bill', 'year_of_bill')},
        ),
    ]
