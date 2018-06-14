$(document).ready(function(){
var dir = "../images/photography/"; 
var fileextension = ".jpg"; 
var i = "1";
    $(function imageloop(){
         $("<img />").addClass("mySlide")
             .attr('src', dir + i + fileextension ).appendTo("#slider-box");
         $("<div/>").addClass("text").appendTo("#slider-box");
         if (i==11){
             console.log("loaded");
         }
         else{
         i++;
         imageloop();
         };
    });   
});