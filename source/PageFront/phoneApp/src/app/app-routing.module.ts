import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneDetailComponent } from './phone/phone-detail/phone-detail.component';
import { PhoneViewComponent } from './phone/phone-view/phone-view.component';
import { PhoneComponent } from './phone/phone.component';

const routes: Routes = [
  {path: "phoneView", component: PhoneViewComponent},
  {path: "phoneDetail/:id", component: PhoneDetailComponent},
  {path: "", redirectTo:'phoneView', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
