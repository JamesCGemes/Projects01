const $creditCard = $('.credit-card');
const $paypal = $('#credit-card').next();
const $bitcoin = $('#credit-card').next().next();

//initial payment option set to 'credit card'
$('#payment option[value="credit card"]').prop('selected', true);
//hide the Pay Pal and bitcoin payment messages
$paypal.hide();
$bitcoin.hide();

//event handler to run when different payment options are selected
$('#payment').change(function() {
    const val = $(this).val();
    //if option selected is 'paypal'
    if (val === 'paypal') {
        //remove classes which can potentially duplicate error messages
        // $('.cc-blank-error, .cc-length-error, .cc-number-error, .zip-blank-error, .zip-length-error, .zip-number-error, .cvv-blank-error, .cvv-length-error, .cvv-number-error, .payment-blank-error').hide();
        //set original paypal font color which can potentially be overwritten
        // $('.payPalMsg').css('color', '#184f68');
        //hide bitcoin and credit card information
        //show paypal information
        $bitcoin.hide();
        $creditCard.hide();
        $paypal.show();
    } else if (val === 'bitcoin') {
        // $('.cc-blank-error, .cc-length-error, .cc-number-error, .zip-blank-error, .zip-length-error, .zip-number-error, .cvv-blank-error, .cvv-length-error, .cvv-number-error, .payment-blank-error').hide();
        //set original bitcoin font color which can potentially be overwritten
        // $('.bitMsg').css('color','#184f68');
        $bitcoin.show();
        $creditCard.hide();
        $paypal.hide();
    } else if (val === 'credit card') {
        // $('.cc-blank-error, .cc-length-error, .cc-number-error, .zip-blank-error, .zip-length-error, .zip-number-error, .cvv-blank-error, .cvv-length-error, .cvv-number-error').show();
        // $('.payment-blank-error').hide();
        $bitcoin.hide();
        $creditCard.show();
        $paypal.hide();
        //if no payment option is selected
    } else {
        //hide bitcoin, credit card and paypal information
        // $('.cc-blank-error, .cc-length-error, .cc-number-error, .zip-blank-error, .zip-length-error, .zip-number-error, .cvv-blank-error, .cvv-length-error, .cvv-number-error, .payment-blank-error').hide();
        $bitcoin.hide();
        $creditCard.hide();
        $paypal.hide();
    }
});
