//alert("hello");


// Password show or hide
let eyeopen = document.querySelector(".open");
let input = document.querySelector(".pass");
let eyeclose = document.querySelector(".close");
let mail = document.querySelector(".mail");
let passalert = document.querySelector(".passwordalert");

eyeclose.addEventListener("click", ()=>{
    if(input.type ="password"){
        input.type = "text";
        eyeopen.style.display = "block";
        eyeclose.style.display = "none";

    }else{
        input.type = "password";
    }
})

eyeopen.addEventListener("click", ()=>{
    if(input.type ="text"){
        input.type = "password";
        eyeclose.style.display = "block";
        eyeopen.style.display = "none";

    }else{
        input.type = "password";
    }
})
// Password show or hide

function empty(){
    if(mail.value == ""){
        alert("Input fields cannot be empty")
        return false;
    }
    else if(input.value==""){
        passalert.style.display = "block";
        return false;
    }
    else{
        passalert.style.display = "none";
    }
}


