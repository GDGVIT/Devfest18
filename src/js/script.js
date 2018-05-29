import $ from 'jquery';
import 'hammerjs';
import 'materialize-css/dist/js/materialize';
import resize from './ResizeSvg';
import initCarousel from './CircleSlider';

function resizeHandler(){
    $('.resize-height').each(function (i) {
        resize($(this),true);
    });
    $('.resize-width').each(function (i) {
        resize($(this),false);
    });
}
function carouselHandler(){

}

resizeHandler();
$(window).resize(resizeHandler);
$(function () {
    // ------ Scripts here --------
    carouselHandler();
});