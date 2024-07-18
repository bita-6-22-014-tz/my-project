import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PaybillComponent } from './paybill/paybill.component';
import { ViewbillComponent } from './viewbill/viewbill.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'paybill', component: PaybillComponent },
  { path: 'viewbill', component: ViewbillComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'about-us', component: AboutUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };