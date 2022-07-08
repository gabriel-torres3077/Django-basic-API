from products.viewsets import ProductViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('produto', ProductViewSet)  # definir rotas para localhost:p/crud/produtos
