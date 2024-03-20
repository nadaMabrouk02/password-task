function check(){
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let count = document.getElementById("count");
    console.log(password , confirm)
    let message = document.getElementById("msg");
    if(password=== confirm){
        message.innerHTML= "password match"
    }
    
    else if(password === "" && (confirm !=="")){
        message.innerHTML= " not valid"
    }else{
        message.innerHTML="password not match"
    }
    let c = 0;
    for(const value of password){
        c++;
    }
    count.innerHTML= `count is ${c}`;
}
