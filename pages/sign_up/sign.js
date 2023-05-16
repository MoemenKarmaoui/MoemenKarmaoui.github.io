let user = document.getElementById("username");
let img = document.getElementById("FT");
let r1 = document.getElementById("error1");
let mail = document.getElementById("mail");
let img1 = document.getElementById("MT");
let pass = document.getElementById("pass");
let img2 = document.getElementById("PT");

user.addEventListener( "input" , ch );

function ch (){
    if ( /[^a-zA-Z]/g.test(user.value) || user.value === ""){     
        img.src= '../../resources/pictures/unchecked.png'

    }
    else{
        img.src= '../../resources/pictures/checked.png'
    }
    localStorage.setItem("prenoun",user.value );
}

mail.addEventListener("input",ch1);

function ch1 (){
    if ( mail.value === "") {     
        img1.src= '../../resources/pictures/unchecked.png'
    }
    else{
        img1.src= '../../resources/pictures/checked.png'
    }
    localStorage.setItem("mail",mail.value );
}
pass.addEventListener("input",ch2);
function ch2 (){
    if ( /[^a-zA-Z]/g.test(pass.value) || pass.value === "" || pass.value.length<8 ){     
        img2.src= '../../resources/pictures/checked.png'
    }
    else{
        img2.src= '../../resources/pictures/unchecked.png'
    }
}
document.getElementById("man").addEventListener("click",ch3);
function ch3 (){
    localStorage.setItem("genre",1);
    document.getElementById("women").classList.remove("shosen");
    document.getElementById("man").classList.add("shosen");
}
document.getElementById("women").addEventListener("click",ch4);
function ch4 (){
    document.getElementById("man").classList.remove("shosen");
    document.getElementById("women").classList.add("shosen");
    localStorage.setItem("genre",2);
}




