import {Routes} from "@angular/router";
const routes : Routes=[
  {
    path:'user',
    loadChildren:'./user/user.module#UserModule'
  }
]
