/*function seterror(id, error){
element = document.querySelector(".form-control");
element.innerHTML = error;
}

function valdateform(){
    var returnval = true;
    var name = document.forms['myForm']["firstname"].value;
    //console.log(name);
   // return false
   
    if(name.length < 5){
        seterror("name", "length of name too short");
        returnval = false;
    }

    return returnval;

}*/
const nameElement = document.getElementById("fname");
const last = document.getElementById("lastname")
const password = document.getElementById("pass")
const email = document.getElementById("email");
const number = document.getElementById("number")
const span =document.getElementById("span");
const form = document.getElementById("form1");
const errorElement = document.getElementById("error");

form.addEventListener("submit" , (e) => {
let messages = []
    if(nameElement.value === "" || nameElement.value === null) {
        messages.push("Name is required")
    }

    if(lastname.value === "" || lastname.value <= 3){
        messages.push("lastName is too short")
    }


    if(pass.value.length <=6){
        messages.push("password must contain more than 6 characters")
    }

    if(pass.value.length >=15){
        messages.push("password must contain less than 15 characters")
    }

    if(messages.length > 0){
       e.preventDefault()
       errorElement.innerText = messages.join(' , ')
    }

})

email.onkeydown = function(){
    const pattern = /^([\.\_a-zA-Z0-9]+)@[a.zA-Z]+)\.([a-zA-Z]){2,8}$/;
    const pattern0 = /^([\.\_a-zA-Z0-9]+)@[a.zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;
    if(pattern.test(email.value) || pattern0.test(email.value)){
        span[0].innerHTML = "your email is valid"

    }
    else{
        span[0].innerHTML = "your email is invalid"
    
    }

}
    number.onkeydown = function(){
        const patternx = /^[0-9]{10}$/;

        if(patternx.test(number.value)){
            span[1].innerHTML = "your number is valid"
            
        }
        else{
            span[1].innerHTML = "your number is invalid"
            
        }

    }

