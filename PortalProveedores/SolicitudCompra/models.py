from django.db import models
from Proveedor.models import Proveedor

# Create models Producto. , related_name='proveedor'
class Producto(models.Model):
    nombreProducto = models.CharField(max_length=30, null=False)
    enlace = models.TextField(null=True)
    stock = models.IntegerField(default=0)
    precioUnitario = models.FloatField(default=0.0)
    proveedor = models.ForeignKey(Proveedor, on_delete=models.CASCADE)
    
    class Meta:
        db_table = 'producto'

    def __str__(self):
        return self.nombreProducto


# Create models Solicitud.
class Solicitud(models.Model):
    #pass
    ESTADO = (
        (1, 'Aprobado'),
        (0, 'Desaprobado'),
    )
    estado = models.IntegerField(choices=ESTADO, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    solicituds = models.ManyToManyField(Producto, through='Solicitud_compra')

    class Meta:
        db_table = 'solicitud'


# Create models SolicitudCompra.
class Solicitud_compra(models.Model):
    solicitud = models.ForeignKey(Solicitud, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.IntegerField(default=1)

    class Meta:
        db_table = 'solicitud_compra'