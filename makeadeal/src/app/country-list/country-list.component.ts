import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {LookupService} from "../services/lookup.service";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
 constructor(lookupSvc:LookupService) { 
this.countries = lookupSvc.getCountryList();

 }
 countries:Array<any>;

  @Output() emitSelectedCountry:EventEmitter<String>=new EventEmitter<String>();
  selectedCountry:String
  getSelectedCountry(){
    this.emitSelectedCountry.next(this.selectedCountry);
  };
 

  ngOnInit() {
  }

}
