import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginRegistraionComponent } from './loginRegistraion.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        LoginRegistraionComponent
    ]
})

export class LoginRegistrationModule { }