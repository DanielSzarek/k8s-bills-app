# Generated by Django 3.1.4 on 2020-12-29 19:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bill_type', models.CharField(choices=[('W', 'Woda'), ('P', 'Prąd')], default='W', max_length=1)),
                ('add_date', models.DateTimeField(auto_now_add=True, verbose_name='Data dodania')),
                ('mod_date', models.DateTimeField(auto_now=True, verbose_name='Data modyfikacji')),
                ('month_of_bill', models.DateField(verbose_name='Miesiąc rozliczeniowy')),
                ('register_value', models.FloatField(verbose_name='Wartość licznika')),
                ('bill_amount', models.DecimalField(decimal_places=2, max_digits=6, verbose_name='Wartość rachunku')),
            ],
            options={
                'db_table': 'bill',
            },
        ),
    ]
