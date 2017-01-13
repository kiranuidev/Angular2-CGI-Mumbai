
import {Component} from '@angular/core';
import {CartService} from '../cart.service';

@Component({
    selector:'cart',
    template:`<a href="#">Cart {{counter}}</a>`,
    providers:[CartService]
})

export class CartComponent{
    counter:number=0;

    constructor(public cartSvc:CartService){
       
     this.updateResult();
    }

    updateResult(){
  this.cartSvc.getCartItems()
        .subscribe(result=>{
          console.log(result);
          this.counter=result});
        return this.counter;
    }
}