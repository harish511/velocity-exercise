import { Component, OnInit } from '@angular/core';
import { RestProviderService } from '../rest-provider.service';

@Component({
  selector: 'app-central-panel',
  templateUrl: './central-panel.component.html',
  styleUrls: ['./central-panel.component.scss']
})
export class CentralPanelComponent implements OnInit {

  public person;
  public numbers;
  public likesNumbers;
  public totalFavourites;

  constructor(public peopleService:RestProviderService) { 
      this.numbers = Array(5).fill(0).map((x,i)=>i);
      this.person = this.peopleService.selectedPerson;
      this.totalFavourites = this.person.Likes.length>this.person.Dislikes.length?this.person.Likes.length:this.person.Dislikes.length;
      this.likesNumbers = Array(this.totalFavourites).fill(0).map((x,i)=>i);
  }

  getSelectedPerson(){
    return this.peopleService.selectedPerson;
  }

  ngOnInit() {
  }

}
