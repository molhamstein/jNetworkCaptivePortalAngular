import { MainServiceService } from './../Services/main-service.service';
import { Component } from '@angular/core';

@Component({
    selector: 'reset-password',
    templateUrl: 'reset-password.component.html',
    styleUrls: ['reset-password.component.scss']
})
export class ResetPasswordComponent {

    code = {}
    newPassword = {}

    ngOnInit() {


        (function ($) {
            "use strict";
            /*==================================================================
            [ Hide Login Form And Show signup Form ]*/

            // $('#date').bootstrapMaterialDatePicker({ weekStart: 0, time: false });

            $('#date').hide();
            $("#signup-form-btn").click(function (evt) {
                evt.preventDefault();
                $('#login100-form').addClass('animated fadeOutDown');
                setTimeout(function () {
                    $('#login100-form').hide();
                    $('#signup100-form').show();
                    $('#signup100-form').addClass('animated fadeInUp');;
                }, 500);
                $('#birth-s').val('');

            });


            /*==================================================================
            [ Hide Login Form And Show forget Form ]*/
            $("#forget100-form-show").click(function (evt) {
                evt.preventDefault();
                $('#login100-form').addClass('animated fadeOutLeft');

                setTimeout(function () {
                    $('#login100-form').hide();
                    $('#forget100-form').show();
                    $('#forget100-form').addClass('animated fadeInRight');;
                }, 500);

            });
            /*==================================================================
            [ Hide Forget Form And Show verify Form ]*/
            $("#verify100-form-show").click(function (evt) {
                evt.preventDefault();
                $('#forget100-form').addClass('animated fadeOutLeft');
                setTimeout(function () {
                    $('#forget100-form').hide();
                    $('#verify100-form').show();
                    $('#verify100-form').addClass('animated fadeInRight');;
                }, 500);
            });
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

            $("#mobile-input-reset , #code-input-reset").on('input', function () {
                if ($('#mobile-input-reset').val() == "" || $('#mobile-input-reset').val() == null || $('#code-input-reset').val() == "" || $('#code-input-reset').val() == null) {
                    if ($('.newPassword').is(":hidden") == false) {
                        $('.newPassword').hide();
                    }
                } else {
                    if ($('.newPassword').is(":hidden") == true) {
                        $('.newPassword').show();
                    }
                }
            });

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


    reset() {

        this.mainServ.API.post("clients/login?include=user", this.code).subscribe((data: any) => {
            if (this.mainServ.API.getErrorCode() == 0) {
                $("#reset100-form-show").click(function (evt) {
                    evt.preventDefault();
                    $('#verify100-form').addClass('animated fadeOutLeft');
                    setTimeout(function () {
                        $('#verify100-form').hide();
                        $('#reset100-form').show();
                        $('#reset100-form').addClass('animated fadeInRight');;
                    }, 500);
                });
            } else {
                // if (this.mainServ.API.getErrorCode() == 401) {
                this.mainServ.global.somthingError("نسيان كلمة السر");
            }
        });

    }


    change() {

        this.mainServ.API.post("clients/login?include=user", this.code).subscribe((data: any) => {
            if (this.mainServ.API.getErrorCode() == 0) {
                $("#reset100-form-show").click(function (evt) {
                    evt.preventDefault();
                    $('#verify100-form').addClass('animated fadeOutLeft');
                    setTimeout(function () {
                        $('#verify100-form').hide();
                        $('#reset100-form').show();
                        $('#reset100-form').addClass('animated fadeInRight');;
                    }, 500);
                });
            } else {
                // if (this.mainServ.API.getErrorCode() == 401) {
                this.mainServ.global.somthingError("إدخال الرمز");
            }
        });

    }


    constructor(public mainServ: MainServiceService) {
    }








}
