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
function callAPI(data){
    return new Promise ((res,rej)=>{
        $.ajax({
            url:'https://thawing-wave-27420.herokuapp.com',
            type:'POST',
            data:data,
            success:function (data) {
                res(data);
            },
            error:function () {
                rej(data);
            }
        })
    });
}

function register() {
    let name = $('#name').val();
    let email = $('#email').val();
    let reg = $('#reg').val();


    callAPI({name,email,reg}).then((data)=>{

        if(data.status===200){
            let $regForm=$('#regForm');
            $regForm.before('<div style="text-align: center;color: white; margin:10% 0"><h2>Registration successful</h2></div>');
            $regForm.remove();
        }
        else {
            data.error.split('+').map((err)=>{
                Materialize.toast(err,3000);
            });
        }
        console.log(data);
    }).catch(function () {
        Materialize.toast('Network connectivity error !',3000);
    })
}
$('#notify').click(()=>{
    register();
});
resizeHandler();
$(window).resize(resizeHandler);
$(function () {
    // ------ Scripts here --------
    carouselHandler();
});

$(window).bind("load", function() {
    resizeHandler();
});