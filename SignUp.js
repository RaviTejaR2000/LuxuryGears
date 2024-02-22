let eyeopen = document.querySelector(".open");
let eyeclose = document.querySelector(".close");
let passone = document.querySelector(".pass");
let passtwo = document.querySelector(".confirm");



eyeclose.addEventListener("click", ()=>{
    if(passone.type ="password"){
        passone.type = "text";
        eyeopen.style.display = "block";
        eyeclose.style.display = "none";

    }else{
        passone.type = "password";
    }
})

eyeopen.addEventListener("click", ()=>{
    if(passone.type ="text"){
        passone.type = "password";
        eyeclose.style.display = "block";
        eyeopen.style.display = "none";

    }else{
        passone.type = "password";
    }
})

let mail = document.querySelector(".mail");
let emailalert = document.querySelector(".emailalert");
let passalert = document.querySelector(".passwordalert");
let passwordconfirm = document.querySelector(".confirmpasswordalert");

function empty(){
    if(mail.value == ""){
        alert("Input fields cannot be empty")
        return false;
    }
    else if(passone.value!==passtwo.value){
        passwordconfirm.style.display = "block";
        return false;
    }
    else if(passone.value===passtwo.value){
        passwordconfirm.style.display = "none";
    }
    else if(passone.value==""){
        passalert.style.display = "block";
        return false;
    }
    else if(passone.value!==""){
        passalert.style.display = "none";
        return false;
    } 
    else if(mail.value==""){
        emailalert.style.display = "block";
        return false;
    }
    else{
        emailalert.style.display = "none";
        passwordconfirm.style.display = "none";
    }
}

