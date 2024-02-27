from rest_framework import routers
from .api import ProductoViewSet, SolicitudViewSet, SolicitudCompraViewSet

# Agregando trailing_slash=False
router = routers.DefaultRouter(trailing_slash=False)
router.register(r'api/producto', ProductoViewSet, 'producto')
router.register(r'api/solicitud', SolicitudViewSet, 'solicitud')
router.register(r'api/solicitudCompra', SolicitudCompraViewSet, 'solicitudCompra')

urlpatterns = router.urls