import { Component,OnInit } from '@angular/core';
import {RestProviderService} from './rest-provider.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
    title = 'app';
    constructor(private rest:RestProviderService){
 
    }
    ngOnInit() { this.loadpeopleDetails(`OnInit`); }
    loadpeopleDetails(msg: string) {
    this.rest.getPeople();
  }
}
