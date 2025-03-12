import { Courses } from "./Courses";

export  class CartItem{


    constructor(public course: Courses){
        this.course = course;
        this.price = course.price;
    }   
    quantity: number=1;
    price: number;
}