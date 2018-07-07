import { MainServiceService } from './../Services/main-service.service';
import { Component } from '@angular/core';

@Component({
    selector: 'verification',
    templateUrl: 'verification.component.html',
    styleUrls: ['verification.component.scss']
})
export class VerificationComponent {
    code = {}
    verfication() {
        this.mainServ.API.get("clients/confirm2?mobile="+this.code['mobile']+"&code="+this.code['code']).subscribe((data: any) => {
            if (this.mainServ.API.getErrorCode() == 0) {
                this.mainServ.global.goTo("login")
            } else {
                // if (this.mainServ.API.getErrorCode() == 401) {
                this.mainServ.global.somthingError("نسيان كلمة السر");
            }
        });
    }
    constructor(private mainServ : MainServiceService){}
}
