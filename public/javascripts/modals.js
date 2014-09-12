$(document).ready(function() {
    $('#registrationForm').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                message: 'This name is not valid',
                validators: {
                    notEmpty: {
                        message: 'Name is required and cannot be empty'
                    },
                    /*stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },*/
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'You name can only consist of alphabetical letters'
                    },
                    /*different: {
                        field: 'password',
                        message: 'The username and password cannot be the same as each other'
                    }*/
                }
            },
            phone: {
                validators: {
                    tel: {
                        format: 'YYYY/MM/DD',
                        message: 'The date of birth is not valid'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Your email is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The email address is not a valid'
                    }
                }
            },
            description: {
                validators: {
                    notEmpty: {
                        message: 'A short description is required'
                    }
                }
            }
        }
    });
});