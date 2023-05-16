let element = document.getElementById("mt2");
function changeY (check) {
    if ( check.checked == true ){
        element.classList.remove("hh4vis");
        element.classList.add("hh4");
    }
    else{
        element.classList.remove("hh4");
        element.classList.add("hh4vis");
    }
}