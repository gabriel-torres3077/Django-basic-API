# Generated by Django 4.0.6 on 2022-07-10 22:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_rename_produto_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='imagem',
            field=models.ImageField(default='C:/Users/lazyg/Desktop/Default.png', upload_to=''),
            preserve_default=False,
        ),
    ]