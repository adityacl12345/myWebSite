$(document).ready(function(){
var dir = "../images/travel/venice/"; 
var fileextension = ".jpg"; 
var i = "1";
    $(function imageloop(){
         $("<img />").addClass("mySlide")
             .attr('src', dir + i + fileextension ).appendTo(".fade");
         $("<div/>").addClass("text").appendTo(".fade");
         if (i==8){
             console.log("loaded");
         }
         else{
         i++;
         imageloop();
         };
    });   
});