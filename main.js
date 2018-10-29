//Resize background height for window
function resize(){

        var heights = window.innerHeight;
        var backdrop = document.getElementById("backdrop")
        backdrop.style.height = heights + "px";
        

    }

resize();

window.onresize = function() {
    resize();
};

//Fade images on scroll

$(document).ready(function(){
    $(window).scroll(function(){
        $("#desImage").css("opacity", 1 - $(window).scrollTop() / ($('#desImage').height()/4));
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

//Toggle Images from opacity
function opacity(){
    var desImage = document.getElementById("desImage")
    var backImage = document.getElementById("backImage")
    var name = document.getElementById("name")

    if (desImage.style.opacity < 0){
        desImage.style.display = "none"
        backImage.style.display = "none"
        name.style.display = "none"
    } else {
        desImage.style.display = "block"
        backImage.style.display = "block"
        name.style.display = "block"
    }
}

window.onscroll = function() {opacity()};

//Scroll to ID
function scrollToAbout(){
    var about = document.getElementById("about")

    about.scrollIntoView({
        behavior: 'smooth'
    })
}

function scrollToExp(){
    var exp = document.getElementById("experience")

    exp.scrollIntoView({
        behavior: 'smooth'
    })
}

function scrollToAbout(){
    var about = document.getElementById("about")

    about.scrollIntoView({
        behavior: 'smooth'
    })
}

function scrollToCon(){
    var Con = document.getElementById("contact")

    Con.scrollIntoView({
        behavior: 'smooth'
    })
}

function scrollToTop(){
    var body = document.getElementById("backdrop")

    body.scrollIntoView({
        behavior: 'smooth'
    })
}
