/**
 * vat application 1.0.0
 * Created by Kouwen 02/01/2014
 * https://github.com/kouwen/vat
 *
 * Documentation
 * https://github.com/kouwen/vat/wiki
 */


$(document).ready(function(){

    //default input field is exclusive vat
    var direction = true;

    $('#vat').slider({ range: "min", max:52,min:0, value: 21, step:1,
        slide: function(event, ui){
            $('#vatVal').html('VAT: '+  ui.value  +'%');
            if (direction) {
                inc(ui.value);
            }
            else {
                exc(ui.value);
            }

        }
    });

    // these 3 lines of code initializes the field on first load
    $('#vatVal').html('VAT: ' + $('#vat').slider("value") +'%');
    $('#exc_vat').val(parseFloat(10).toFixed(2));
    inc($('#vat').slider("value"));


    //This event collects the value of the exc_vat input field and immediately after key is pressed calculates inc and set it into inc_vat input field
    $('#exc_vat').keyup(function(){
        inc($('#vat').slider("value"));
        direction = true;
    });
    $('#inc_vat').keyup(function(){
        exc($('#vat').slider("value"));
        direction = false;
    });


    //This function calculates and set the value into to the inc_vat input field
    function inc(value){
        $('#inc_vat').val(parseFloat(parseFloat(value)/100* parseFloat($('#exc_vat').val()) + parseFloat($('#exc_vat').val())).toFixed(2));
    }

    //This function sets the value of the exc_vat input field after calculating the value exclusive vat
    function exc(value){
        $('#exc_vat').val( parseFloat( parseFloat($('#inc_vat').val()) / (parseFloat(value/100) +1)).toFixed(2));
    }

});
