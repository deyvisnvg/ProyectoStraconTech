# Generated by Django 5.0.2 on 2024-02-26 07:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('SolicitudCompra', '0002_solicitud_created_at_solicitud_estado_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='solicitud_compra',
            old_name='producto',
            new_name='producto_id',
        ),
    ]
