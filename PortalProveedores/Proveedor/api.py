from rest_framework import viewsets, permissions
from .serializers import ProveedorSerializer
from .models import Proveedor
# from .pagination import StandardResultsSetPagination


class ProveedorViewSet(viewsets.ModelViewSet):
    queryset = Proveedor.objects.all().order_by('id')
    permission_classes = [permissions.AllowAny]

    serializer_class = ProveedorSerializer
    #pagination_class = StandardResultsSetPagination