from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .models import Producto, Solicitud, Solicitud_compra
from .serializers import ProductoSerializer, SolicitudSerializer, SolicitudCompraSerializer


class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all().order_by('id')
    permission_classes = [permissions.AllowAny]

    serializer_class = ProductoSerializer


class SolicitudViewSet(viewsets.ModelViewSet):
    queryset = Solicitud.objects.all().order_by('id')
    permission_classes = [permissions.AllowAny]

    serializer_class = SolicitudSerializer


class SolicitudCompraViewSet(viewsets.ModelViewSet):
    queryset = Solicitud_compra.objects.all().order_by('id')
    permission_classes = [permissions.AllowAny]

    serializer_class = SolicitudCompraSerializer