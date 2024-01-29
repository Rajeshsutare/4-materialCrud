import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostDashboardComponent } from './shared/components/post-dashboard/post-dashboard.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { MaterialsModule } from './shared/materials/materials/materials.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostCardComponent } from './shared/components/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDashboardComponent,
    NavbarComponent,
    PostFormComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
