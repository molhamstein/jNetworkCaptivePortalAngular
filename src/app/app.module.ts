import { VerificationComponent } from './verification/verification.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SuccessLoginComponent } from './success-login/success-login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DialogComponent } from './dialog/dialog.component';
import { CallAPIService } from './Services/call-api.service';
import { LogInServiceService } from './Services/log-in-service.service';
import { MainServiceService } from './Services/main-service.service';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import * as $ from 'jquery';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { MyDatePickerModule } from 'mydatepicker';
import { AppComponent } from './app.component';
import 'hammerjs';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent, VerificationComponent,MainPageComponent,DialogComponent,ResetPasswordComponent,SuccessLoginComponent,NotFoundComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, MyDatePickerModule, NgxMyDatePickerModule.forRoot(),
    RouterModule.forRoot(routes)
      // material
    ,MatDialogModule , BrowserAnimationsModule ],
  providers: [MainServiceService, LogInServiceService, CallAPIService],
  entryComponents:[DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
