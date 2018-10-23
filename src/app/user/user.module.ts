import {NgModule} from "@angular/core";
import {UserlistComponent} from './components/userlist/userlist.component';
import {LoginComponent} from './components/login/login.component';
import { DeleteuserComponent } from './components/deleteuser/deleteuser.component';
import {UserRouting} from './user.routing';
import {AdduserComponent} from "./components/adduser/adduser.component";

@NgModule({
  imports: [UserRouting],
  exports: [],
  declarations: [UserlistComponent, LoginComponent, DeleteuserComponent,AdduserComponent]
})
export class UserModule {

}
