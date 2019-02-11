import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsComponent } from './components/forms/forms.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';

import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {PrisionerService } from './components/servicios/prisioner.service';
import { ComponentsComponent } from './components/components.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ComponentsComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatButtonModule
  ],
  providers: [PrisionerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
