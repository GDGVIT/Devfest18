import $ from 'jquery'
import resize from './ResizeSvg';

function ResTimeline($container) {
    let $vertical=$container.find('.left-line,.right-line');
    let $horizontal =$container.find('.bottom-line');
    let h = $container.height();
    let w= $container.width();
    $vertical.each(function () {
        $(this).height(h);
        resize($(this),true);
    });
    $horizontal.each(function () {
        $(this).width(w);
        resize($(this),false);
    });
}

export default ResTimeline;