import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for form handling

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PaybillComponent } from './paybill/paybill.component';
import { ViewbillComponent } from './viewbill/viewbill.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    RegisterComponent,
    HomeComponent,
    PaybillComponent,
    ViewbillComponent,
    ContactComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Include FormsModule here for form handling
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
