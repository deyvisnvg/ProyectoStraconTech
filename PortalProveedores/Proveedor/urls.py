from .api import ProveedorViewSet
from rest_framework import routers

# Agregando trailing_slash=False
router = routers.DefaultRouter(trailing_slash=False)
router.register(r'api/proveedor', ProveedorViewSet, 'proveedor')

urlpatterns = router.urls