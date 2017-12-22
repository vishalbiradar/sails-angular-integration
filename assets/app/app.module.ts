import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


import { LoginRegistrationModule } from './loginRegistration/loginRegistration.module';
import { appRoutingProviders, routing } from "./app.routes";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        LoginRegistrationModule,
        routing
    ],
    declarations: [
        AppComponent
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule { }