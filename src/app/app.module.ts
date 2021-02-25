import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {MDBSpinningPreloader,  ToastModule, MDBBootstrapModulesPro} from 'ng-uikit-pro-standard';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from '../app/app-routing.module';
import { HomeComponent } from './home/pages/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoginComponent } from './login/pages/login/login.component';
import { HeaderComponent } from './login/components/header/header.component';
import { DevComponent } from './development/pages/dev/dev.component';
import { ContactComponent } from './contact/pages/contact/contact.component';
import { NavComponent } from './development/components/nav/nav.component';
import { FootComponent } from './development/components/foot/foot.component'


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        LoginComponent,
        HeaderComponent,
        DevComponent,
        ContactComponent,
        NavComponent,
        FootComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        MDBBootstrapModulesPro.forRoot(),
        ToastModule.forRoot(),
        ReactiveFormsModule,   
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule  {
  
}
