$(document).ready(function(){



$('#t').click(
   
            function(){
                
                if ($('#fieldforcontactform').css("width")=="20px")
                {
                    $('#fieldforcontactform').css("width", "400px");
                    $('#f').fadeIn(0.01);
                    $('#t').text("Hide");
                }
                    else
                    {
                    $('#fieldforcontactform').css("width", "20px");
                    
                    $('#f').fadeOut(0.01);
                     $('#t').text("Show");
                    
                    }
            }
    );



$('#formHide').toggle( function() {
     $('#forms').fadeOut(3000);
 },  function ()  {
     $('#forms').fadeIn(3000);
 });



}); 
 

    
  

    
    

