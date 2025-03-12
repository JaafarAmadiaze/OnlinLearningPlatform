import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Courses } from '../shared/models/Courses';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})


export class CartService {

private cart:Cart =this.getCartFromLocalStorage();
private cartSubject :BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.cart);


constructor() { }

addToCart(course:Courses):void{

  let item = this.cart.item.find(item => item.course.id == course.id);
  if(item){
      item.quantity++;
  }else{
      this.cart.item.push(new CartItem(course));
  }
  this.cart.totalCounter++;
  this.cart.totalPrice += course.price;
  this.cartSubject.next(this.cart);
  this.setCartToLocalStorage();
  
  }


  removeFromCart(course:Courses):void{
    this.cart.item = this.cart.item.filter(item => item.course.id != course.id);
    this.setCartToLocalStorage();

  }


  changeQuantity(course:Courses,quantity:number):void{
    let item = this.cart.item.find(item => item.course.id == course.id);
    if(item){
      item.quantity = quantity;
      this.cart.totalCounter += quantity;
      this.cart.totalPrice += quantity * course.price;
    }
    this.cartSubject.next(this.cart);
    this.setCartToLocalStorage();
  }


  clearChart():void{
    this.cart=new Cart();
    this.setCartToLocalStorage();
  }


    getCartObservable():Observable<Cart>{
           return this.cartSubject.asObservable();
    }


    getObservable():Observable<Cart>{
          return this.cartSubject.asObservable();
    }


    private setCartToLocalStorage():void{

        this.cart.totalPrice = this.cart.item.reduce((prevSum,currentItem) => prevSum + currentItem.price,0);
        this.cart.totalCounter = this.cart.item.reduce((prevSum,currentItem) => prevSum + currentItem.quantity,0);
        const cartJson = JSON.stringify(this.cart);
        localStorage.setItem('cart',cartJson);
        this.cartSubject.next(this.cart);

    }

private getCartFromLocalStorage():Cart{

  const cartJson = localStorage.getItem('cart');
  if(cartJson){
    return JSON.parse(cartJson);
  }
  return new Cart();
}


}
