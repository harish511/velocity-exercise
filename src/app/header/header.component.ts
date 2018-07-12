import { Component, OnInit } from '@angular/core';
import { RestProviderService } from '../rest-provider.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public peopleService:RestProviderService) { }

  ngOnInit() {
  }

  searchPeople(newValue){
    this.peopleService.setSearchText(newValue);
  }

}
