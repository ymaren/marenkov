$(document).ready(function(){



$('#t').click(
   
            function(){
                
                if ($('#fieldforcontactform').css("width")=="20px")
                {
                    $('#fieldforcontactform').css("width", "400px");
                    $('#f').fadeIn(0.01);
                    $('#t').attr('src', 'picture/btnHide.bmp');
                }
                    else
                    {
                    $('#fieldforcontactform').css("width", "20px");
                    $('#f').fadeOut(0.01);
                     $('#t').attr('src', 'picture/btnShow.bmp');
                    
                    }
            }
    );


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














$('#formHide').toggle( function() {
     $('#forms').fadeOut(3000);
 },  function ()  {
     $('#forms').fadeIn(3000);
 });



}); 
 

    
  

    
    

