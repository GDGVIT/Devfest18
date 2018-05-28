import $ from 'jquery';

function resize($elem,isheight){
    let $svg =$elem.find('svg');
    let h=$elem.height();
    let w=$elem.width();
    let $path = $svg.find('.line-segment');
    let oldPath=$path.attr("d");
    let newPath=oldPath.split(' ');
    newPath[1]=`v${isheight?h:w}`;
    newPath=newPath.join(' ');
    $svg.height(h);
    $path.attr("d",newPath);
}
export default resize;