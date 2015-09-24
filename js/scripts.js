/**
 * Created by alexander on 24.09.15.
 */

var saveButton = $('.button-save');
var mas = [];

$( document ).ready(function() {
    getStorage();
});

function getStorage(){
    $('.square').each(function(indx, element){
        if(localStorage.getItem('first'+ indx) == 1){
            $(this).find('.checkbox-icon').css({'color': '#189AC4'});
            $(this).addClass('checked')
        }
    });
}

$(document).on('click', '.button-save', function (e) {
    $('.button-cancel').hide();
    $('.txt-button-save').css( {'color': '#8DA3C5'});
    $('.button-save').css({'background-color' : 'inherit', 'border-radius': '3px', 'border': '4px solid #8DA3C5'})
    $('.txt-button-save').text('SAVED');
    $('.txt-button-save').css({'margin-left': '10px'});

});

$(document).on('click', '.square', function (e) {

    $('.button-cancel').show();
    $('.txt-button-save').css( {'color': ''});
    $('.button-save').css({'background-color' : '', 'border-radius': '', 'border': ''})
    $('.txt-button-save').text('Save');
    $('.txt-button-save').css({'margin-left': ''});


    $('.block-button').hide();
    $('.block-button').show();

    $(this).find('.checkbox-icon').css({'color': '#189AC4'});
    if ($(this).hasClass('checked')){
        $(this).find('.checkbox-icon').css({'color': '#213140'});
        $(this).removeClass('checked')
    } else {
        $(this).find('.checkbox-icon').css({'color': '#189AC4'});
        $(this).addClass('checked');
    }
});

$(document).on('click', '.items', function (e) {
    if (!$(this).hasClass('sett')){
        $('.general-block').hide();
        $('.block-button').hide();

        if ($(this).hasClass('my')){
            $('.inscription').text('My account')
        }
        if ($(this).hasClass('prof')){
            $('.inscription').text('My Profile')
        }
        if ($(this).hasClass('log')){
            $('.inscription').text('Log out')
        }


    } else {
        $('.general-block').show();
        $('.inscription').text('Settings')
    }
    var element = $('.items');
    element.css({'background-color': ''});
    element.find('.text').css({'color': '#8CA2C3'});
    element.find('.icon-io').css({'color': '#8DA3C5'});

    $(this).css({'background-color': '#16222C'});
    $(this).find('.text').css({'color': 'white'});
    $(this).find('.icon-io').css({'color': 'white'});
});


$(document).on('click', '.button-save', function (e) {
    $('.square').each(function(indx, element){
        if($(this).hasClass('checked')){
            localStorage.setItem('first'+ indx, '1');
        } else {
            localStorage.setItem('first'+ indx, '0');
        }

    });
});


$(document).on('click', '.button-cancel', function (e) {
    $('.square').each(function(indx, element){
        $(this).find('.checkbox-icon').css({'color': '#213140'});
        $(this).removeClass('checked')
    });
    getStorage();
});

