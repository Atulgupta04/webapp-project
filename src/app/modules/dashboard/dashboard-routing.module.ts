import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardpageComponent } from '../dashboard/components/dashboardpage/dashboardpage.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {path: '', component: DashboardpageComponent, 
  children: [
    {path: 'home', component: HomeComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'footer', component: FooterComponent},
    {path: '', redirectTo:'/dashboard/home', pathMatch: 'full'}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
