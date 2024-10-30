import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChorusComponent } from './components/chorus/chorus.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MaterialModule } from './modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChorusCardComponent } from './components/chorus-card/chorus-card.component';
import { EditChorusModalComponent } from './components/edit-chorus-modal/edit-chorus-modal.component';
import { TextInputFieldComponent } from './components/text-input-field/text-input-field.component';

@NgModule({
  declarations: [
    AppComponent,
    ChorusComponent,
    AdminComponent,
    LoginComponent,
    HeaderComponent,
    LogoutComponent,
    ChorusCardComponent,
    EditChorusModalComponent,
    TextInputFieldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
