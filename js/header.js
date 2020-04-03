$(document).ready(function(){


var imgItems =$('.slider li').length;
var imgPos=1;

for(i=1;i<=imgItems;i++){
    $('.pagination').append('<li><span class="fa fa-chevron-left"></span></li>');

}

$(.'silder li').hide();
$(.'silder li:first').show();
$(.'pagination li:first').css({'color':'#CD6E2E'});


$(.'pagination li').click(pagination);

$(.'right span').click(nextSlider);
$(.'left span').click(prevSlider);


setInterval(function({
    nextSlider();
},4000);

function pagination(){
    var paginationPos =$(this).index()+1;

    $('slider li').hide();
    $('slider li:nth-child('+ pagination +')').fadeIn();
    $(.'pagination li').css({'color':'#858585'});
    $(this).css({'color':'#CD6E2E'});

    imgPos=paginationPos;

}

function nextSlider(){
    if(imgPos>=imgItems){
        imgPos=1;
    }
    else{
        imgPos++;
    }
    $(.'pagination li').css({'color':'#858585'});
    $('slider li:nth-child('+imgPos+')').css({'color':'#CD6E2E'});
    $(.'silder li').hide();
    $('slider li:nth-child('+ imgPos +')').fadeIn();

}


function prevSlider(){
    if(imgPos<=1){
        imgPos=imgItems;
    }
    else{
        imgPos--;
    }
    $(.'pagination li').css({'color':'#858585'});
    $('slider li:nth-child('+imgPos+')').css({'color':'#CD6E2E'});
    $(.'silder li').hide();
    $('slider li:nth-child('+ imgPos +')').fadeIn();

}
})