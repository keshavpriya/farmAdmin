import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
//import {UserModule} from "./user/user.module";
import { HeaderComponent } from './layout/header/header.component';
import { LeftSidebarComponent } from './layout/left-sidebar/left-sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './front/home/home.component';
import { AboutComponent } from './front/about/about.component';
import {AppRouting} from "./app.routing";
import {UserModule} from "./user/user.module";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSidebarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
     UserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
