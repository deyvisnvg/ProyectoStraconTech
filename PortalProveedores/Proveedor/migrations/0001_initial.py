# Generated by Django 5.0.2 on 2024-02-26 03:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Proveedor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombreProveedor', models.CharField(max_length=25)),
                ('direccion', models.CharField(max_length=300)),
                ('celular', models.CharField(max_length=11)),
                ('asociacion', models.IntegerField(choices=[(1, 'Socio'), (0, 'No Socio')], default=1)),
            ],
            options={
                'db_table': 'proveedor',
            },
        ),
    ]
