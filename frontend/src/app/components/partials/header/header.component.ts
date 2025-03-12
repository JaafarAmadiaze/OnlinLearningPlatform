import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit {
cartQuantity = 0;

  constructor(cartService :CartService) { 
    cartService.getObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCounter;})
     
  }

  ngOnInit(): void {
  }

}
