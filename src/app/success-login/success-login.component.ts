import { ActivatedRoute } from '@angular/router';
import { MainServiceService } from './../Services/main-service.service';
import { Component } from '@angular/core';

@Component({
    selector: 'success-login',
    templateUrl: 'success-login.component.html',
    styleUrls: ['success-login.component.scss']
})
export class SuccessLoginComponent {

    params = {};
    constructor(public mainServ: MainServiceService, private route: ActivatedRoute) {
        this.route.queryParams
            .subscribe(params => {
                this.params = params
                if (params['mac'] != null) {
                    console.log("Params")
                    this.mainServ.global.setParams(params);
                }
                else {
                    console.log("no Params")
                    this.params = this.mainServ.global.getParams();

                }

            });
    }

    visitPage() {
        let params = this.mainServ.global.getParams();
        let url = params['link-orig'];
        this.mainServ.global.goTo(url, false);
    }

}
