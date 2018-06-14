window.onload = function(){
    
        document.getElementById("sidebar").addEventListener('click',openCloseBar);
}
function openCloseBar(){
    var sidenav = document.getElementById("sidenav");
    if(sidenav.style.width == '' || sidenav.style.width == "0px"){
        sidenav.style.width = "250px";
    }
    else{
        sidenav.style.width = "0px";
    }
}
