from rest_framework import serializers
from .models import Proveedor

class ProveedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proveedor
        fields = ('id', 'nombreProveedor', 'direccion', 'celular', 'asociacion')