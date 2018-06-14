window.onload = function(){
    
    document.getElementById("sidebar").addEventListener('click',openCloseBar);
    document.body.addEventListener('click', closeBar);
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
function closeBar(event) {
    var sidenav = document.getElementById("sidenav");
    var noClick = "#sidebar";
    if(!event.target.matches(noClick)) {
        if(sidenav.style.width == "250px"){
            sidenav.style.width = "0px";
        }
    }  
}
