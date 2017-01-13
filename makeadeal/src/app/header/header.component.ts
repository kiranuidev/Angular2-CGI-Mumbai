import {Component} from '@angular/core';
import {Page} from'./page';
@Component({
    templateUrl:"./header.component.html",
    selector:"app-header"
})


export class HeaderComponent{
 brand="CGI";
 page:Page;
 navigationItems=["Login","SignUp","Home","Products","Register"];
 
constructor(){
    this.page = new Page();
    this.page.name="Welcome";
}

 loadPage(type){
    this.page = new Page();
    this.page.name=type;
 }

 selectedCountry(data){
     console.log(data);
 }
}