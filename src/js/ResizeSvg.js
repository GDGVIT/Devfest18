import $ from 'jquery';

function resize($elem,isheight){
    let $svg =$elem.find('svg');
    let h=$elem.height();
    let w=$elem.width();
    let $path = $svg.find('.line-segment');
    let oldPath=$path.attr("d");
    let newPath=oldPath.split(' ');
    newPath[1]=`${isheight?'v':'h'}${isheight?h:w}`;
    newPath=newPath.join(' ');
    isheight?$svg.height(h):$svg.width(w);
    $path.attr("d",newPath);
}
export default resize;