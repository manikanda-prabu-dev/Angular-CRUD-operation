import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule,route } from './app-routing.module';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ApiService} from './api.service';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    route,
    AppComponent,
    RegisterComponent,
    DetailsComponent,
    AddComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
