const screen =
document.getElementById("screen");

/* Add Values */

function append(value){

    screen.value += value;
}

/* Clear Screen */

function clearScreen(){

    screen.value = "";
}

/* Delete Last Character */

function deleteLast(){

    screen.value =
    screen.value.slice(0,-1);
}

/* Calculate */

function calculate(){

    try{

        screen.value =
        eval(screen.value);

    }catch{

        screen.value =
        "Error";
    }
}

/* Keyboard Support */

document.addEventListener(
"keydown",
(event)=>{

    const key = event.key;

    if(
        "0123456789+-*/.".includes(key)
    ){

        screen.value += key;
    }

    else if(key==="Enter"){

        calculate();
    }

    else if(key==="Backspace"){

        deleteLast();
    }

    else if(key==="Escape"){

        clearScreen();
    }

});