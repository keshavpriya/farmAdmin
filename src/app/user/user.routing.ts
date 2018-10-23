import {RouterModule, Routes} from '@angular/router';
import {UserlistComponent} from './components/userlist/userlist.component';
import {AdduserComponent} from './components/adduser/adduser.component';
import {DeleteuserComponent} from './components/deleteuser/deleteuser.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: UserlistComponent
  },
  {
    path: 'add',
    component: AdduserComponent
  },
  {
    path: 'add/:id',
    component: AdduserComponent
  },
  {
    path: 'delete',
    component: DeleteuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRouting {

}
