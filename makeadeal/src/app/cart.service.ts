import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs';


@Injectable()
export class CartService{
   
  private subject:Subject<number> = new Subject<number>();
  
   addToCart():void{
        this.cartItems++;
        this.subject.next(this.cartItems);
    }

    getCartItems():Observable<number>{
        return this.subject.asObservable();
    }
     cartItems:number=0;
   
}