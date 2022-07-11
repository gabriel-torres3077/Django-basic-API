import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import {Phone} from 'src/app/interfaces/phone';
@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css'],
  providers: [ApiService]
})
export class PhoneDetailComponent implements OnInit{

  title = 'phoneDetail';
  // phone = [{id: '',
  //           desc: 0,
  //           sku: 0,
  //           custo: 0,
  //           valor_venda: 0,
  //           estoque: 0,
  //           categoria: '',
  //           sub_categoria: '',
  //           marca: '',
  //           modelo: '',
  //           fabricante: '',
  //           imagem: '',
  //         }]

  constructor(private api:ApiService, private route:ActivatedRoute) {
  
  }
  ngOnInit(): void{
    this.route.params.subscribe(params => this.getPhoneById(params['id']));
  }
  phone:Phone | undefined;
  getPhoneById = (id:number) => {
    this.api.getOnePhone(id).subscribe((data:Phone) => this.phone = data);
  }

}
