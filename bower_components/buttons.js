/**
 * Created by IG03022 on 2/6/2017.
 */
$(document).ready(function(){
    document.querySelector('#button1').addEventListener('click', function(){
        //console.log('hey');
        Handlebars.getTemplate('template1');
        $('#button1, #button2, #button3, #button4, .screen, .mute, .tv').fadeOut(2000);
        $('.cover').fadeOut(2000);
        $('.section_one').fadeIn(1000);
    });





});

