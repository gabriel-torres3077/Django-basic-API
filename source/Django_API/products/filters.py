from django_filters import rest_framework as filters
from .models import Product

class ProductFilter(filters.FilterSet):
    desc = filters.CharFilter(field_name='desc', lookup_expr='icontains')
    categoria = filters.CharFilter(field_name='categoria', lookup_expr='icontains')
    sub_categoria = filters.CharFilter(field_name='sub_categoria', lookup_expr='icontains')
    marca = filters.CharFilter(field_name='marca', lookup_expr='icontains')
    modelo = filters.CharFilter(field_name='modelo', lookup_expr='icontains')
    fabricante = filters.CharFilter(field_name='fabricante', lookup_expr='icontains')
    class Meta:
        model=Product
        fields=('desc', 'categoria', 'sub_categoria', 'marca', 'modelo', 'fabricante')