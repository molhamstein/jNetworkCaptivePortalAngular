import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
export const routes: Routes = [
    
    {
        path: 'reset/:token',
        component: ResetPasswordComponent
    },
    {
        path: 'login/:code/:userId',
        component: MainPageComponent
    },
    {
        path: '**',
        component: MainPageComponent
    }
]