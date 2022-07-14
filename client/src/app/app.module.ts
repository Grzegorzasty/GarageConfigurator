import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './configurator/contact.component';
import { FooterComponent } from './footer/footer.component';
import { GarageConfiguratorComponent } from './garage-configurator/garage-configurator.component';
import { PlasteredGarageConfiguratorComponent } from './plastered-garage-configurator/plastered-garage-configurator.component';
import { DumpsterConfiguratorComponent } from './dumpster-configurator/dumpster-configurator.component';

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatSliderModule} from "@angular/material/slider";
import {MatStepperModule} from "@angular/material/stepper";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { StepperComponent } from './garage-configurator/stepper/stepper.component';
import { PlasteredStepperComponent} from './plastered-garage-configurator/stepper/plastered-stepper.component';
import { DumpsterStepperComponent} from './dumpster-configurator/stepper/dumpster-stepper.component';

import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import { GardenConfiguratorComponent } from './garden-configurator/garden-configurator.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductsComponent,
    ContactComponent,
    FooterComponent,
    GarageConfiguratorComponent,
    PlasteredGarageConfiguratorComponent,
    DumpsterConfiguratorComponent,
    StepperComponent,
    PlasteredStepperComponent,
    DumpsterStepperComponent,
    GardenConfiguratorComponent,
    GalleryComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    RouterModule.forRoot([
      {path: 'kontakt', component: ContactComponent},
      {path: 'oferta', component: ProductsComponent},
      {path: 'galeria', component: GalleryComponent},
      {path: 'onas', component: AboutusComponent}

    ]),
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
