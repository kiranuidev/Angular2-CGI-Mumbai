import {Component} from '@angular/core';

@Component({
    templateUrl:"./header.component.html",
    selector:"app-header"
})


export class HeaderComponent{
 brand="CGI";
 page="home";
 navigationItems=["Login","SignUp","Home","Products"];
 
 loadPage(type){
    this.page =type;
 }
}