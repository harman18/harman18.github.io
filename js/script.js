var containAll = document.getElementsByClassName("contain-all")[0];
var headerNavBox = document.getElementsByClassName("header-navbar-box")[1];
var headerIcon = document.getElementsByClassName("header-icon")[0];
var containAllOverlay = document.getElementsByClassName("contain-all-overlay")[0];
function headerToggle(ele) {
    ele.setAttribute("onclick", null);
    setTimeout((function(){ele.setAttribute("onclick", "headerToggle(this)")}), 500);
    setInterval(function(){ele.clic = false;}, 500)
    ele.classList.toggle("header-toggle");
    if (ele.classList.length == 1) {
        containAll.style.marginRight = "0px";
        headerNavBox.style.width = "0px";
        setTimeout(function(){headerNavBox.style.visibility = "hidden";}, 500);
    }
    else {
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
        }
    }
});
