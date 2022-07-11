import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'phoneApp';
  id;
  desc;
  sku;
  custo;
  valor_venda;
  estoque;
  categoria;
  sub_categoria;
  marca;
  modelo;
  fabricante;
  imagem;

  constructor(private api:ApiService) {
    this.getPhones();
  }
  getPhones = () => {
    this.api.getAllPhones().subscribe(
      data => {
        
        this.id = data.id;
        this.desc = data.desc;
        this.sku = data.sku;
        this.custo = data.custo;
        this.valor_venda = data.valor_venda;
        this.estoque = data.estoque;
        this.categoria = data.categoria;
        this.sub_categoria = data.sub_categoria;
        this.marca = data.marca;
        this.modelo = data.modelo;
        this.fabricante = data.fabricante;
        this.imagem = data.imagem;
      
      },
      error => {
        console.log(error);
      }
    )
  }
}
