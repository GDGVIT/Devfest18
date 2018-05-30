import $ from 'jquery'
import resize from './ResizeSvg'

function mobileResize($container) {
    let $vertical=$container.find('.mobile-timeline-vertical-line');
    let start=$vertical.offset().top;
    let end=$container.find('.day-end-mobile').offset().top;
    let h=end-start;
    $vertical.height(h+10);
    resize($vertical,true);
    console.log(h)
}

export default mobileResize;