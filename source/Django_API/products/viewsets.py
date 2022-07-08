from rest_framework import viewsets
from rest_framework.filters import SearchFilter
from . import models
from . import serializers
from .filters import ProductFilter

class ProductViewSet(viewsets.ModelViewSet):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductSerializer
    filterset_class = ProductFilter

    