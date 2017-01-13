import { Component, OnInit,Input,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class ProductsComponent implements OnInit {
  @Input() myPage:any;
  
  
  productTableHeaders =["S.No","Product Name","Price"];
  
  products=[{
id:1,
price:"1000",
name:"iPad"
  },
  {
id:1,
price:"1000",
name:"Mobile"
  }
  ]

  constructor() { }

  ngOnInit() {
  }

}
