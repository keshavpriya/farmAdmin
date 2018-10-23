import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {UserModule} from "./user/user.module";
import { HeaderComponent } from './layout/header/header.component';
import { LeftSidebarComponent } from './layout/left-sidebar/left-sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
     UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
