
document.querySelector('.trigger').addEventListener('click',function(){
	document.querySelector('.res-menu').classList.toggle('js-res-menu');
	document.querySelector('.headersection').classList.toggle('active');
})
// confirm poup js********************************************************************

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0]; 
var cancel = document.getElementById("cancel");
function confirmbox() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
document.querySelector('.modal').addEventListener('click',function(){
	modal.style.display = "none";
})
cancel.onclick = function(){
    modal.style.display = "none";
}
// Reg from js*************************************************************************

var regModel = document.getElementById('regModel');
var regspan = document.getElementsByClassName("regModel-close")[0]; 
var regcancel = document.getElementById("regModel-cancel");
function regForm() {
    regModel.style.display = "block";
    modal.style.display = "none";
}
regspan.onclick = function() {
    regModel.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == regModel) {
        regModel.style.display = "none";
    }
}
regcancel.onclick = function(){
    regModel.style.display = "none";
}
// Form varification ******************************************************************

var fname = document.myform.fname;
var lname = document.myform.lname;
var passv = document.myform.password;
var rpassv = document.myform.Rpassword;
function valledfname(){
    if (fname.value == "") {
        this.error = false;
        fname.style.border = "1px solid red";
        document.getElementById("fnameWrn").innerHTML = "Enter your first name !";
        return false;
    }else{
        this.error = true;
        fname.style.border = "1px solid green";
        document.getElementById("fnameWrn").innerHTML = "";
        return false;
    }
}
function valledlname(){
    if (lname.value == "") {
        this.error = false;
        lname.style.border = "1px solid red";
        document.getElementById("lnameWrn").innerHTML = "Enter your last name !";
        return false;
    }else{
        this.error = true;
        lname.style.border = "1px solid green";
        document.getElementById("lnameWrn").innerHTML = "";
        return false;
    }
}

function valledemail(){
    var regemail = /([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})/;
    var email = document.myform.email;
    if (!regemail.test(email.value)) {
        this.error = false;
        email.style.border = "1px solid red";
        document.getElementById("emailWrn").innerHTML = "Enter your valide email !";
        return false;
    }
    else{
        this.error = true;
        email.style.border = "1px solid green";
        document.getElementById("emailWrn").innerHTML = "";
        return false;
    }
}

function valledpass(){
    if (passv.value == "") {
        this.error = false;
        passv.style.border = "1px solid red";
        document.getElementById("passWrn").innerHTML = "Enter your password !";
        return false;
    }else if(passv.value.length < 6){
        this.error = false;
        passv.style.border = "1px solid red";
        document.getElementById("passWrn").innerHTML = "Use minimum 6 disit password";
        return false;
    }
    else{
        this.error = true;
        passv.style.border = "1px solid green";
        rpassv.disabled = false;
        document.getElementById("passWrn").innerHTML = "";
        return false;
    }
}

function valledRpass(){
    if (rpassv.value == "") {
        this.error = false;
        rpassv.style.border = "1px solid red";
        document.getElementById("RpassWrn").innerHTML = "Confirm your password !";
        return false;
    }else if(passv.value == ""){
        this.error = false;
        rpassv.disabled = true;
        document.getElementById("passWrn").innerHTML = "First enter your password here !";
        document.getElementById("RpassWrn").innerHTML = "";
        return false;
    }
    else if(rpassv.value !== passv.value){
        this.error = false;
        rpassv.style.border = "1px solid red";
        document.getElementById("RpassWrn").innerHTML = "Password dosn't match !";
        return false;
    }
    else{
        this.error = true;
        rpassv.style.border = "1px solid green";
        document.getElementById("RpassWrn").innerHTML = "";
        return false;
    }
}
function submitData(){
    valledfname();
    valledlname();
    valledemail();
    valledpass();
    valledRpass();
    return error;
    
}


// Show and hide password 
$("#showpass").on("click", function(){
    var show = document.getElementById("showpass");
    var pass = $("#password");
    var cpass = $("#cpassword");
    var filedType = pass.attr("type");
    var cfiledType = cpass.attr("type");
    if (filedType == "password" && cfiledType =="password"){
        pass.attr("type", "text");
        cpass.attr("type", "text");
        show.style.background = "#FFD200";
        show.style.border = "none";
    }else{
        pass.attr("type", "password");
        cpass.attr("type", "password");
        show.style.background = "#fff";
        show.style.border = "1px solid black";
    }
})

$(document).ready(function(){
    $("#select1,#select2,#select3,#select4,#select5").click(function(){
        $("ul").removeClass("js-res-menu");
        $("#headersection").removeClass("active");
    })
});
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 2500) {
            $("#gototop").fadeIn();
        }else{
            $("#gototop").fadeOut();
        }
    })
})

$("#gototop").click(function(){
    $("html,body").animate({scrollTop : 0}, 500)
})

$(document).ready(function(){

    $("li>a").click(function(){
    var target = $(this).attr("href");
    $("html, body").stop().animate({
        scrollTop : $(target).offset().top
    },700)

});
    return false;

})
