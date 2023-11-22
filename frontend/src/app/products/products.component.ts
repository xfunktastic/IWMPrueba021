import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  data:any[]=[];
  products:any[]=[];

  constructor(private ApiService: ApiserviceService){

  }

  ngOnInit(){
    this.fillData();
  }

  fillData(){
    this.ApiService.getData().subscribe(data=>{
      console.log(data);
      this.data=data;
      this.products=data[0];
    })
  }
}
