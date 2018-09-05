//Resize background height for window
function resize(){

        var heights = window.innerHeight;
        var backdrop = document.getElementById("backdrop")
        backdrop.style.height = heights + "px";
        var about = document.getElementById("about")
        about.style.height = heights + "px";

    }

resize();

window.onresize = function() {
    resize();
};

//Fade images on scroll

$(document).ready(function(){
    $(window).scroll(function(){
        $("#desImage").css("opacity", 1 - $(window).scrollTop() / ($('#desImage').height() / 2));
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        $("#backImage").css("opacity", .31 - $(window).scrollTop() / ($('#backImage').height()));
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        $("#name").css("opacity", 1 - $(window).scrollTop() / ($('#name').height()));
    });
});