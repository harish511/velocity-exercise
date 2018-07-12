
/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import {People} from './people';


@Injectable({
  providedIn: 'root'
})
export class RestProviderService {

 public peopleList;
  public selectedPerson={};
  private searchText="";
  constructor(private http:Http) { 
    
  }

  setSearchText(searchText){
    this.searchText=searchText;
  }
  getSearchText(){
    return this.searchText;
  }

  getPeople(){
    this.http.get('../assets/people.json').subscribe((response)=>{
      console.log(response._body);
      this.peopleList=JSON.parse(response._body).People;
      this.selectedPerson=this.peopleList[0];
    });
  }
}
