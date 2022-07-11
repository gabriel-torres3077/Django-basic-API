from django.db import models

# Create your models here.
class Product(models.Model):
    desc = models.CharField(max_length=300)
    sku = models.IntegerField()
    custo = models.DecimalField(max_digits=10, decimal_places=2)
    valor_venda = models.DecimalField(max_digits=10, decimal_places=2)
    estoque = models.IntegerField()
    categoria = models.CharField(max_length=50)
    sub_categoria = models.CharField(max_length=90)
    marca = models.CharField(max_length=100)
    modelo = models.CharField(max_length=200)
    fabricante = models.CharField(max_length=100)
    imagem = models.ImageField()


