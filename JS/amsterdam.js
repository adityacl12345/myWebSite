$(document).ready(function(){
var dir = "../images/travel/amsterdam/"; 
var fileextension = ".jpg"; 
var i = "1";
    $(function imageloop(){
         $("<img />").addClass("mySlide")
             .attr('src', dir + i + fileextension ).appendTo(".fade");
         $("<div/>").addClass("text").appendTo(".fade");
         if (i==11){
             console.log("loaded");
         }
         else{
         i++;
         imageloop();
         };
    });   
});