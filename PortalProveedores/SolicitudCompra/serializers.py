from rest_framework import serializers
from .models import Producto, Solicitud, Solicitud_compra


class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = (
            "id",
            "nombreProducto",
            "enlace",
            "stock",
            "precioUnitario",
            "proveedor",
        )


class SolicitudCompraSerializer(serializers.ModelSerializer):
    solicitud = serializers.PrimaryKeyRelatedField(read_only=True)
    # producto = serializers.PrimaryKeyRelatedField(queryset=Producto.objects.all())
    # producto = ProductoSerializer()
    #producto = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Solicitud_compra
        fields = ("id", "solicitud", "producto", "cantidad")


class SolicitudSerializer(serializers.ModelSerializer):
    solicituds = SolicitudCompraSerializer(many=True)

    class Meta:
        model = Solicitud
        fields = ("id", "estado", "created_at", "solicituds")
        read_only_fields = ("created_at",)

    def create(self, validated_data):
        solicituds_data = validated_data.pop("solicituds")
        solicitud = Solicitud.objects.create(**validated_data)
        for solicitud_data in solicituds_data:
            Solicitud_compra.objects.create(
                solicitud=solicitud, **solicitud_data
            )
        return solicitud
