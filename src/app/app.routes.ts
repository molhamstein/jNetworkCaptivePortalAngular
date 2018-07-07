import { VerificationComponent } from './verification/verification.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SuccessLoginComponent } from './success-login/success-login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
export const routes: Routes = [

    {
        path: 'reset',
        component: ResetPasswordComponent
    },
    // {
    //     path: 'login/:mac/:ip/:username/:link-login/:link-orig/:error/:trial/:login-by/:chap-challenge/:link-login-only/:link-orig-esc/:mac-esc/:identity/:bytes-in-nice/:bytes-out-nice',
    //     component: MainPageComponent
    // },
    {
        path: 'login',
        component: MainPageComponent
    },
    {
        path: 'successLogin',
        component: SuccessLoginComponent
    },
    {
        path: 'verification',
        component: VerificationComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]