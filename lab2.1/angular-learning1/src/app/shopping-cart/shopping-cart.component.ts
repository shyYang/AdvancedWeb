import { Component, OnInit } from '@angular/core';
import { MyServiceService} from '../my-service.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  products: any[];
  constructor(public service: MyServiceService) { }

  ngOnInit(): void {
    this.products = this.service.getAll();
    console.log(this.products);
  }
  remove(product: any){
    this.service.remove(product.name);
    location.reload();
    window.alert('Remove Successfully');
  }

}
