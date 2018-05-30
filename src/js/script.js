import $ from 'jquery';
import 'hammerjs';
import 'materialize-css/dist/js/materialize';
import resize from './ResizeSvg';
import initCarousel from './CircleSlider';
import timelineResize from './TimelineResize'
import mobileResize from './mobileTimeline'

function resizeHandler(){
    $('.resize-height').each(function (i) {
        resize($(this),true);
    });
    $('.resize-width').each(function (i) {
        resize($(this),false);
    });
    if($(window).width()>=600) {
        $('.line-container').each(function () {
            timelineResize($(this));
        });
    }
    else{
        $('.timeline-section').each(function () {
            mobileResize($(this));
        });
    }
}
function carouselHandler(){

}

resizeHandler();
$(window).resize(resizeHandler);
$(function () {
    // ------ Scripts here --------
    carouselHandler();
});