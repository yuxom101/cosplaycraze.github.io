function openSignUp() {
    document.querySelector(".forms").style.display = "block";
}

function cancelSignUp() {
    document.querySelector(".forms").style.display ="none";
    document.querySelector("body").style.overflow = "auto";

}

function openLogIn() {
    document.querySelector(".forms2").style.display = "block";
    document.querySelector(".forms").style.display = "none";
}

function cancelLogIn() {
    document.querySelector(".forms2").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
    document.querySelector(".forms").style.display = "block";
}

    // ABOUT US

function ryniaLink() {
    window.location.href="https://web.facebook.com/people/Rynia-Apugan/pfbid0J66iVDtw7SeZTf9Nc8ysVJ8sJTew6kV6n43xaCbZqhdAVBSvzfLZdVV4uhNXSPqNl/";
}