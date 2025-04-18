import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/User';


@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit {
cartQuantity = 0;
user!:User;

  constructor(cartService :CartService ,  private userService : UserService) { 
    cartService.getObservable().subscribe((newCart) => {

      this.cartQuantity = newCart.totalCounter;})

      userService.userObservable.subscribe((newUser)=>{
        this.user=newUser;
      })

     
  }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();
  }

get isAuth(){
  return this.user.token;
}

}
