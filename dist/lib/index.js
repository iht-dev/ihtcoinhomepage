define(function(){window.onscroll=function(){if($(window).scrollTop()>=100){$('.head').addClass('addHead');$('.maodian').fadeIn()}else{$('.head').removeClass('addHead');$('.maodian').fadeOut()}};var curscrolltop=-1;function invisiblezone(){var wintop=$(window).scrollTop();var winheight=$(window).height();if(Math.abs(wintop-curscrolltop)<20)
    return 0;var d=0;if((wintop-curscrolltop)>0){d=1;}else if((wintop-curscrolltop)<0){d=2;}
    if(d==1){$('.head').addClass('hidden')}else{$('.head').removeClass('hidden')}
    curscrolltop=wintop;};})