


//acces 
let inputText = document.querySelector(".results .inputs input")
let resultText = document.querySelector(".results .result input")
let button = document.getElementById("send")

button.onclick = function sumbmet(e){
    e.preventDefault();
    calc()
}


function display(num ){
    inputText.value +=  num
}

function Clear(){
    inputText.value  = "";
    resultText.value =  "";
}
function Delete(){
    inputText.value  = inputText.value.slice(0,-1)

}

function calc(){
    try{
        resultText.value =  eval(inputText.value)
    }
    catch(err){
        resultText.value =  "error"
    }
}



//
let results = document.querySelector(".results")
function mov(){
    results.setAttribute("style","transform: scaleX(110%);");
    setTimeout(() => {
        results.removeAttribute("style");
    }, 200);
}