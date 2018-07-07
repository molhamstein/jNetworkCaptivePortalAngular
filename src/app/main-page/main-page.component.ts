import { MainServiceService } from './../Services/main-service.service';
import { Component } from '@angular/core';

import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'main-page',
    templateUrl: 'main-page.component.html',
    styleUrls: ['main-page.component.scss']
})
export class MainPageComponent {
    user = {};
    loginUser = {};
    reset = {};

    myOptions: INgxMyDpOptions = {
        minYear: 1901,
        maxYear: 2020,
        // TODO
        // maxYear: parseInt(moment().format('YYYY'), 10),
        dateFormat: 'dd.mm.yyyy',
    };


    validateAll() {
        var input = $('.signup100-form.validate-input .input100  ,.signup100-form.validate-input .select-input100');
        var check = true;
        for (var i = 0; i < input.length; i++) {
            if (this.validate(input[i]) == false) {
                check = false;
            }
        }
        return check;
    }


    validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().toString().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                alert("email is false");
                return false;
            }
        } else if ($(input).is('select')) {
            if ($(input).val() == null) {
                alert("select is false");
                return false;
            }
        }
        else {
            if ($(input).val().toString().trim() == '') {
                console.log("input");
                console.log(input);
                return false;
            }
        }
    }

    ngOnInit() {


        (function ($) {
            "use strict";
            /*==================================================================
            [ Hide Login Form And Show signup Form ]*/

            // $('#date').bootstrapMaterialDatePicker({ weekStart: 0, time: false });

            $('#date').hide();
            $("#signup-form-btn").click(function (evt) {
                evt.preventDefault();
                $('#signup100-form').removeClass('animated fadeOutUp');
                $('#login100-form').removeClass('animated fadeInDown');;
                $('#login100-form').addClass('animated fadeOutDown');
                setTimeout(function () {
                    $('#login100-form').hide();
                    $('#signup100-form').show();
                    $('#signup100-form').addClass('animated fadeInUp');;
                }, 500);
                $('#birth-s').val('');

            });


            $("#signin-form-btn").click(function (evt) {
                evt.preventDefault();
                $('#signup100-form').removeClass('animated fadeInUp');;
                $('#login100-form').removeClass('animated fadeOutDown');
                $('#signup100-form').addClass('animated fadeOutUp');
                setTimeout(function () {
                    $('#signup100-form').hide();
                    $('#login100-form').show();
                    $('#login100-form').addClass('animated fadeInDown');;
                }, 500);
                $('#birth-s').val('');

            });


            /*==================================================================
            [ Hide Login Form And Show forget Form ]*/
            $("#forget100-form-show").click(function (evt) {
                evt.preventDefault();
                $('#forget100-form').removeClass('animated fadeOutRight');
                $('#login100-form').removeClass('animated fadeInLeft');;
                $('#login100-form').addClass('animated fadeOutLeft');

                setTimeout(function () {
                    $('#login100-form').hide();
                    $('#forget100-form').show();
                    $('#forget100-form').addClass('animated fadeInRight');;
                }, 500);

            });

            $("#back-to-login").click(function (evt) {
                evt.preventDefault();
                $('#login100-form').removeClass('animated fadeOutLeft');
                $('#forget100-form').removeClass('animated fadeInRight');;

                $('#forget100-form').addClass('animated fadeOutRight');

                setTimeout(function () {
                    $('#forget100-form').hide();
                    $('#login100-form').show();
                    $('#login100-form').addClass('animated fadeInLeft');;
                }, 500);

            });





            /*==================================================================
            [ Hide Forget Form And Show verify Form ]*/
            // $("#verify100-form-show").click(function (evt) {
            //     evt.preventDefault();
            //     $('#forget100-form').addClass('animated fadeOutLeft');
            //     setTimeout(function () {
            //         $('#forget100-form').hide();
            //         $('#verify100-form').show();
            //         $('#verify100-form').addClass('animated fadeInRight');;
            //     }, 500);
            // });
            /*==================================================================
            [ Hide verify Form And Show reset Form ]*/
            $("#reset100-form-show").click(function (evt) {
                evt.preventDefault();
                $('#verify100-form').addClass('animated fadeOutLeft');
                setTimeout(function () {
                    $('#verify100-form').hide();
                    $('#reset100-form').show();
                    $('#reset100-form').addClass('animated fadeInRight');;
                }, 500);
            });
            /*==================================================================
            [ Data Picker Setup ]*/
            // $('input[name="birth-s"]').daterangepicker({
            //     singleDatePicker: true,
            //     showDropdowns: true,
            //     minYear: 1901,
            //     maxYear: parseInt(moment().format('YYYY'), 10)
            // });
            /*==================================================================
            [ Validate after type ]*/
            $('.validate-input .input100 , .validate-input .select-input100').each(function () {
                $(this).on('blur', function () {
                    if (validate(this) == false) {
                        showValidate(this);
                    }
                    else {
                        $(this).parent().addClass('true-validate');
                    }
                })
            });
            /*==================================================================
            [ Validate after Change Menu ]*/
            $('.validate-input .select-input100').each(function () {
                $(this).on('change', function () {
                    console.log(this);
                    if (validate(this) == false) {
                        showValidate(this);
                    }
                    else {
                        $(this).parent().addClass('true-validate');
                    }
                })
            });


            /*==================================================================
            [ Validate ]*/
            var input = $('.validate-input .input100  , .validate-input .select-input100');
            $('.validate-form').on('submit', function () {
                var check = true;
                for (var i = 0; i < input.length; i++) {
                    if (validate(input[i]) == false) {
                        showValidate(input[i]);
                        check = false;
                    }
                }

                return check;
            });


            $('.validate-form .input100 , .validate-form .select-input100').each(function () {
                $(this).focus(function () {
                    hideValidate(this);
                    $(this).parent().removeClass('true-validate');
                });
            });

            function validate(input) {
                if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
                    if ($(input).val().toString().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                        return false;
                    }
                } else if ($(input).is('select')) {
                    if ($(input).val() == null) {
                        return false;
                    }
                }
                else {
                    if ($(input).val().toString().trim() == '') {
                        return false;
                    }
                }
            }

            function showValidate(input) {
                var thisAlert = $(input).parent();

                $(thisAlert).addClass('alert-validate');

                $(thisAlert).append('<span class="btn-hide-validate">&#xf135;</span>')
                $('.btn-hide-validate').each(function () {
                    $(this).on('click', function () {
                        hideValidate(this);
                    });
                });
            }

            function hideValidate(input) {
                var thisAlert = $(input).parent();
                $(thisAlert).removeClass('alert-validate');
                $(thisAlert).find('.btn-hide-validate').remove();
            }



        })(jQuery);


        // (function ($) {
        //     "use strict";
        //     /*==================================================================
        //     [ Hide Login Form ]*/
        //     $("#signup-form-btn").click(function (evt) {
        //         evt.preventDefault();
        //         $('#login100-form').addClass('animated fadeOutDown');
        //         setInterval(function () {
        //             $('#login100-form').hide();
        //             $('#signup100-form').show();
        //             $('#signup100-form').addClass('animated fadeInUp');;
        //         }, 1000);
        //         $('#birth-s').val('');

        //     });
        //     // $('input[name="birth-s"]').IMyDpOptions({
        //     //     singleDatePicker: true,
        //     //     showDropdowns: true,

        //     //     minYear: 1901,
        //     //     maxYear: 1902,
        //     //     //   maxYear: parseInt(moment().format('YYYY'),10)
        //     // });
        //     /*==================================================================
        //     [ Validate after type ]*/
        //     $('.validate-input .input100 , .validate-input .select-input100').each(function () {
        //         $(this).on('blur', function () {
        //             if (validate(this) == false) {
        //                 showValidate(this);
        //             }
        //             else {
        //                 $(this).parent().addClass('true-validate');
        //             }
        //         })
        //     });
        //     /*==================================================================
        //     [ Validate after Change Menu ]*/
        //     $('.validate-input .select-input100').each(function () {
        //         $(this).on('change', function () {
        //             console.log(this);
        //             if (validate(this) == false) {
        //                 showValidate(this);
        //             }
        //             else {
        //                 $(this).parent().addClass('true-validate');
        //             }
        //         })
        //     });


        //     /*==================================================================
        //     [ Validate ]*/
        //     var input = $('.validate-input .input100  , .validate-input .select-input100');
        //     $('.validate-form').on('submit', function () {
        //         var check = true;
        //         for (var i = 0; i < input.length; i++) {
        //             if (validate(input[i]) == false) {
        //                 showValidate(input[i]);
        //                 check = false;
        //             }
        //         }

        //         return check;
        //     });


        //     $('.validate-form .input100 , .validate-form .select-input100').each(function () {
        //         $(this).focus(function () {
        //             hideValidate(this);
        //             $(this).parent().removeClass('true-validate');
        //         });
        //     });

        //     function validate(input) {
        //         if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
        //             if ($(input).val().toString().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        //                 return false;
        //             }
        //         } else if ($(input).is('select')) {
        //             if ($(input).val() == null) {
        //                 return false;
        //             }
        //         }
        //         else {
        //             if ($(input).val().toString().trim() == '') {
        //                 return false;
        //             }
        //         }
        //     }

        //     function showValidate(input) {
        //         var thisAlert = $(input).parent();

        //         $(thisAlert).addClass('alert-validate');

        //         $(thisAlert).append('<span class="btn-hide-validate">&#xf135;</span>')
        //         $('.btn-hide-validate').each(function () {
        //             $(this).on('click', function () {
        //                 hideValidate(this);
        //             });
        //         });
        //     }

        //     function hideValidate(input) {
        //         var thisAlert = $(input).parent();
        //         $(thisAlert).removeClass('alert-validate');
        //         $(thisAlert).find('.btn-hide-validate').remove();
        //     }



        // })(jQuery);

    }
    params = {};
    constructor(public mainServ: MainServiceService, private route: ActivatedRoute) {
        this.user['birthdate'] = { date: { year: 2018, month: 10, day: 9 } };
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

    signUp() {
        if (this.validateAll() == true) {
            this.user['birthdate'] = this.user['birthdate']['jsdate'];
            if (this.user['mobile'].substring(0, 2) == "09") {
                this.user['mobile'] = "00963" + this.user['mobile'].substring(1);
            } else if (this.user['mobile'].substring(0, 4) == "+963") {
                this.user['mobile'] = "00963" + this.user['mobile'].substring(4);
            }

            this.mainServ.API.post("clients", this.user).subscribe((data: any) => {
                if (this.mainServ.API.getErrorCode() == 0) {
                    this.mainServ.global.goTo('verification/')
                } else {
                    // if (this.mainServ.API.getErrorCode() == 401) {
                    this.mainServ.global.somthingError("إنشاء الحساب");
                }
            })
        }
    }

    resetPassword() {
        this.mainServ.API.post("clients/reset", this.reset).subscribe((data: any) => {
            if (this.mainServ.API.getErrorCode() == 0) {
                this.mainServ.global.goTo("reset/")
            } else {
                // if (this.mainServ.API.getErrorCode() == 401) {
                this.mainServ.global.somthingError("تسجيل الدخول");
            }
        });
    }

    signIn() {
        this.mainServ.API.post("clients/login?include=user", this.loginUser).subscribe((data: any) => {
            if (this.mainServ.API.getErrorCode() == 0) {
                $('#login100-form').addClass('animated fadeOut');

                setTimeout(function () {
                    $('#login100-form').hide();
                    $('#successLogin-form').show();
                    $('#successLogin-form').addClass('animated fadeIn');;
                }, 500);

            } else {
                // if (this.mainServ.API.getErrorCode() == 401) {
                this.mainServ.global.somthingError("تسجيل الدخول");
            }
        });
    }

    gotToLink() {
        let params = this.mainServ.global.getParams();
        let link = params['link-login-only'];
        link += "?mac=" + params['mac'] +
            "&" + "ip=" + params['ip'] +
            "&" + "username=" + params['username'] +
            "&" + "link-login=" + params['link-login'] +
            "&" + "link-orig=" + params['link-orig'] +
            "&" + "error=" + params['error'] +
            "&" + "trial=" + params['trial'] +
            "&" + "login-by=" + params['login-by'] +
            "&" + "chap-id=" + params['chap-id'] +
            "&" + "chap-challenge=" + params['chap-challenge'] +
            "&" + "link-login-only=" + params['link-login-only'] +
            "&" + "link-orig-esc=" + params['link-orig-esc'] +
            "&" + "mac-esc=" + params['mac-esc'] +
            "&" + "identity=" + params['identity'] +
            "&" + "bytes-in-nice=" + params['bytes-in-nice'] +
            "&" + "bytes-out-nice=" + params['bytes-out-nice'] +
            "&" + "session-time-left=" + params['session-time-left'] +
            "&" + "uptime=" + params['uptime'] +
            "&" + "refresh-timeout=" + params['refresh-timeout'] +
            "&" + "link-status=" + params['link-status'];

        this.mainServ.global.goTo(link, false);
    }
}
