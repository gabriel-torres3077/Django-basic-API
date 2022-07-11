import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css'],
  providers: [ApiService]
})
export class PhoneDetailComponent{

  title = 'phoneDetail';
  phone = [{id: '',
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
    
  }
  getPhoneClicked = (phone) => {
    this.api.getOnePhone(phone.id).subscribe(
      data => {
        this.phone = data;
      },
      error => {
        console.log(error);
      }
    )
  }

}
