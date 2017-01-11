import { Injectable } from '@angular/core';

@Injectable()
export class LookupService {

  constructor() { }

  getCountryList() {
    return  [
      { value: "IN", name: "India" },
      { value: "US", name: "United States" }
    ];
  }

}
