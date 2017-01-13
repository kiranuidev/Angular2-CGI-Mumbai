import { Component, OnInit } from '@angular/core';
import {RegisterService} from"../services/register.service";
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

import {CartService} from '../cart.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[CartService]
})
export class RegisterComponent implements OnInit {
   registerForm : FormGroup;

  constructor(public registerSvc:RegisterService,public fbBuilder:FormBuilder) { 

    this.registerForm = fbBuilder.group({
      'firstName':["Kiran",Validators.required],
      'phone':["",
      Validators.compose([
      Validators.maxLength(10),
      Validators.minLength(10),
      Validators.required])
      
      ]
          });
  }
   user ={};
  ngOnInit() {
  }


  registerUser(){
    this.registerSvc.userRegistration(this.user)
    .subscribe(result=>{console.log(result)})
  }
  
  submitForm(data){
    console.log(data);
  }
}
