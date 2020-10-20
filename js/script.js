var containAll = document.getElementsByClassName("contain-all")[0];
var headerNavBox = document.getElementsByClassName("header-navbar-box")[1];
var headerNavBoxLogo = document.getElementsByClassName("header-navbar-box")[0];
var headerNavbar = headerNavBoxLogo.parentElement;
var headerIcon = document.getElementsByClassName("header-icon")[0];
var containAllOverlay = document.getElementsByClassName("contain-all-overlay")[0];
var currScroll = window.pageYOffset, prevScroll;
var timeOut = 0;
function headerToggle() {
    if ((window.innerWidth) > 900){
        return;
    }
    headerIcon.setAttribute("onclick", null);
    setTimeout((function(){headerIcon.setAttribute("onclick", "headerToggle(this)")}), 500);
    headerIcon.classList.toggle("header-toggle");
    if (headerIcon.classList.length == 1) {
        containAll.style.marginRight = "0px";
        headerNavBox.style.width = "0px";
        setTimeout(function(){headerNavBox.style.visibility = "hidden";}, 500);
        containAll.children[0].style.width = "0%";
        containAll.children[0].style.opcaity = "0.1";
    }
    else {
        containAll.children[0].style.width = "100%";
        containAll.children[0].style.opacity = "0.8";
        headerNavBox.style.visibility = "visible";
        headerNavBox.style.width = "250px";
        containAll.style.marginRight = "250px";
    }
}
window.addEventListener('resize', function(){
   var width = window.innerWidth;
    if (width > 900){
        if (containAll.style.margin == "250px"){
            headerToggle(headerIcon);
        }
       headerNavBox.style.width = "auto";
       headerNavBox.style.visibility = "visible";
   }
    else{
        if (containAll.style.marginRight == "0px" || containAll.style.marginRight == ""){
            headerNavBox.style.width = "0px";
            setTimeout(function(){headerNavBox.style.visibility = "hidden";}, 500);
            containAll.children[0].style.width = "0%";
            containAll.children[0].style.opcaity = "0.1";
        }
    }
});

window.onscroll = function(){
    prevScroll = currScroll;
    currScroll = window.pageYOffset;
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
        if (headerNavbar.style.top == "-80px" && prevScroll <= 30){
            headerNavbar.style.top = "0px";
            timeOut = setTimeout(function(){headerNavbar.style.top="-80px"}, 1000);
        }
        headerNavbar.style.minHeight="80px";
        headerNavbar.style.backgroundColor="white";
        headerNavbar.style.boxShadow="1px 1px 5px 2px grey";
    }
    else{
        clearTimeout(timeOut);
        timeOut=0;
        headerNavbar.style.top = "0px";
        headerNavbar.style.minHeight="60px";
        headerNavbar.style.backgroundColor="transparent";
        headerNavbar.style.boxShadow="none";
    }
}

window.onmousemove = function(){
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
        if(window.event.clientY <= 80){
            clearTimeout(timeOut);
            timeOut = 0;
            headerNavbar.style.top = "0px";
        }
        else{
            if (headerNavbar.style.top == "0px" && !timeOut){
                timeOut = setTimeout(function(){headerNavbar.style.top = "-80px";}, 1000);
            }
        }
    }
    else{
        headerNavbar.style.top = "0px";
    }
}