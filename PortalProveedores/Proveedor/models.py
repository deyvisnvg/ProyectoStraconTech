from django.db import models

# Create your models here.
class Proveedor(models.Model):
    PARTNERSHIP = (
        (1, 'Socio'),
        (0, 'No Socio'),
    )
    nombreProveedor = models.CharField(max_length=25, null=False)
    direccion = models.CharField(max_length=300, null=False)
    celular = models.CharField(max_length=11, null=False)
    asociacion = models.IntegerField(
        default=1,
        choices=PARTNERSHIP,
        )

    class Meta:
        db_table = 'proveedor'

    def __str__(self):
        return self.nombreProveedor
