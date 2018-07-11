import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CentralPanelComponent } from './central-panel/central-panel.component';
import {RestProviderService} from './rest-provider.service';
import { FilterPipe} from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    CentralPanelComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpModule
  ],
  providers: [RestProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
