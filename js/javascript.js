$(document).ready(function(){



// form contact
$('#btnShow_Hide_form').click(
   
            function(){
                
                if ($('#fieldforcontactform').css("width")=="20px")
                {
                    $('#fieldforcontactform').css("width", "400px");
                    $('#div_form').fadeIn(0.01);
                    $('#btnShow_Hide_form').attr('src', 'picture/btnHide.bmp');
                    
                    $('#myname').animate({'top': '0'}, 1000);
                    $('#myname').animate( {'left': '100%'} , 1000);
                }
                    else
                    {
                      $('#fieldforcontactform').css("width", "20px");
                      $('#div_form').fadeOut(0.01);
                      $('#btnShow_Hide_form').attr('src', 'picture/btnShow.bmp');
                      
                      $('#myname').animate({'top': '200px'}, 1000);
                      $('#myname').animate( {'left': '0'} , 1000);
                    
                    }
            }
    );



//button owner menu
$ ('#btnowner').click( 
 function()
{
    if ($('#navig').css("display") =="none")
    {
     $('#btnowner').css('transform','rotate('+ 90 + 'deg)');
     $('#navig').css('display','inline');
    }
    else
    {
     $('#navig').css('display','none');
     $('#btnowner').css('transform','rotate('+ 0 + 'deg)');
    }
}
);







//button  hedder
$('#arrowRef').click( 
function(){
    
   event.preventDefault();
   
   //забираем идентификатор бока с атрибута href
   var id  = $(this).attr('href');
   //узнаем высоту от начала страницы до блока на который ссылается якорь
   var top = $(id).offset().top;
   //анимируем переход на расстояние - top за 1500 мс
   $('body,html').animate({scrollTop: top}, 1500);
}
);



// move resume
$(function() {
	
	$('#cube').draggable({containment: "body"});
	$('#resume').draggable( {axis: "x"},   {containment: "parent"});
	
});



$('#menuHome').click( 
function(){
    
   event.preventDefault();
   
   //забираем идентификатор бока с атрибута href
   var id  = $(this).attr('href');
   //узнаем высоту от начала страницы до блока на который ссылается якорь
   var top = $(id).offset().top;
   //анимируем переход на расстояние - top за 1500 мс
   $('body,html').animate({scrollTop: top}, 1500);
   $('#navig').fadeOut(1500);
   $('#btnowner').css('transform','rotate('+ 0 + 'deg)');
}
);


$('#menuskills').click( 
function(){
    
   event.preventDefault();
   
   //забираем идентификатор бока с атрибута href
   var id  = $(this).attr('href');
   //узнаем высоту от начала страницы до блока на который ссылается якорь
   var top = $(id).offset().top;
   //анимируем переход на расстояние - top за 1500 мс
   $('body,html').animate({scrollTop: top}, 1500);
   $('#navig').fadeOut(1500);
   $('#btnowner').css('transform','rotate('+ 0 + 'deg)');
}
);








$('#menulast').click( 
function(){
    
   event.preventDefault();
   
   //забираем идентификатор бока с атрибута href
   var id  = $(this).attr('href');
   //узнаем высоту от начала страницы до блока на который ссылается якорь
   var top = $(id).offset().top;
   //анимируем переход на расстояние - top за 1500 мс
   $('body,html').animate({scrollTop: top}, 1500);
   $('#navig').fadeOut(1500);
   $('#btnowner').css('transform','rotate('+ 0 + 'deg)');
   
  
}
);


$('#menuContact').click( 
function(){
    
   event.preventDefault();
    $('#fieldforcontactform').css("width", "400px");
    $('#div_form').fadeIn(0.01);
    $('#btnShow_Hide_form').attr('src', 'picture/btnHide.bmp');
    $('#myname').animate({'top': '0'}, 1000);
    $('#myname').animate( {'left': '100%'} , 1000);
   
   $('#navig').fadeOut(1500);
   $('#btnowner').css('transform','rotate('+ 0 + 'deg)');
   
  
}
);



//sent form


$('#sentform').click(function() {
  // Please set your email in url field
  $.ajax({
      url: "https://formspree.io/evgmarenkov@gmail.com",  
      method: "POST",
      data: {
             email: 'email.value',
             message: 'msg.value'
             },
      dataType: "json"
  }).done(function() {
       alert ('Thank you!');
  } );
});









$('#formHide').toggle( function() {
     $('#forms').fadeOut(3000);
 },  function ()  {
     $('#forms').fadeIn(3000);
 });



}); 
 

    
  

    
    

