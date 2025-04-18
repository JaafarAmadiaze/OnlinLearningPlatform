import { Component , OnInit} from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Cart } from '../../../shared/models/Cart';
import { CartItem} from '../../../shared/models/CartItem';
import { TitleComponent } from "../../partials/title/title.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";




@Component({
  selector: 'app-cart-page',
  imports: [TitleComponent, CommonModule, RouterModule, NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
cart! : Cart;
constructor(private cartService :CartService) {
  this.cartService.getCartObservable().subscribe((cart) => {
    this.cart = cart;
  });
}

ngOnInit():void {
}

removeFromCart(cartItem: CartItem) {
  this.cartService.removeFromCart(cartItem.course);
}

changeQuantity(cartItem: CartItem, quantityInString: string) {
  const quantity = parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.course, quantity);}

}

