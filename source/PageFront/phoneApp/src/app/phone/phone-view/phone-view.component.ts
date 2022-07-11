import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-phone-view',
  templateUrl: './phone-view.component.html',
  styleUrls: ['./phone-view.component.css'],
  providers: [ApiService]
})
export class PhoneViewComponent{

  title = 'phoneView';
  phones = [{id: '',
            desc: 0,
            sku: 0,
            custo: 0,
            valor_venda: 0,
            estoque: 0,
            categoria: '',
            sub_categoria: '',
            marca: '',
            modelo: '',
            fabricante: '',
            imagem: '',
          }]

  constructor(private api:ApiService) {
    this.getPhones();
  }
  getPhones = () => {
    this.api.getAllPhones().subscribe(
      data => {
        this.phones = data;
      },
      error => {
        console.log(error);
      }
    )
  }

}
