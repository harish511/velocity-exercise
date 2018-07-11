import { Component, OnInit , Input } from '@angular/core';
import { RestProviderService } from '../rest-provider.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public peopleList;

  constructor(public peopleService:RestProviderService) { 
    this.peopleList=peopleService.peopleList;
  }

  selectPerson(person){
      this.peopleService.selectedPerson=person;
  }

  ngOnInit() {
  }

}
