
// $(document).ready(function(){
// 	$('.content').css({
//   	'margin-top':$('#nav').outerHeight()
//   });
// });

// $('#nav').affix({
//   offset: {
//     top: $('header').height()
//   }
// });	

$(document).ready(function(){
	$('.content').css({
  	'margin-top':$('#nav').outerHeight()
  });
});

// $('#nav').affix({
//   offset: {
//     top: $('header').height()
//   }
// });


$(function() {
  $(window).scroll(function() {
    var aTop = $('.content').height();
    if ($(this).scrollTop() >= aTop) {
     $('#nav').css( "position", "fixed" );
    //  $('#content').css( "top", "0" );
    //  $('#content').css( "width", "100%" );
    }
  });
});

// var mouseyImages = ['images/m_da.svg', 'images/m_legs.svg', 'images/m_sleep.png', 'images/m_up.svg', 'images/m_sv.svg', 'images/m_ls.svg' ];
// let mouseyDiv = document.getElementById('mouse1');
// var arrayLength = mouseyImages.length;
// for (let i=1; i<arrayLength; i++) {
  
//     setTimeout( function timer(){
//       mouseyDiv.innerHTML += '<img src=\"'+mouseyImages[i]+'\"  >';
//     }, i*1500 );

// }
