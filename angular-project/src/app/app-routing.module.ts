import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './components/features/features.component';
import { EnterpricesComponent } from './components/enterprices/enterprices.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { SupportComponent } from './components/support/support.component';

const routes: Routes = [
  {path:'features',component:FeaturesComponent},
  {path:'enterprises',component:EnterpricesComponent},
  {path:'support',component:SupportComponent},
  {path:'pricing',component:PricingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
