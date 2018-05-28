import $ from 'jquery';
import 'hammerjs';
import 'materialize-css/dist/js/materialize';
import resize from './ResizeSvg';

function resizeHandler(){
    $('.resize-height').each(function (i) {
        resize($(this),true);
    });
    $('.resize-width').each(function (i) {
        resize($(this),false);
    });
}

$(function () {
    // ------ Scripts here --------
    resizeHandler();
    $(window).resize(resizeHandler);
});