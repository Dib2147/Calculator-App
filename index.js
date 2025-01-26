const disp = document.getElementById("display");

function appendTodisplay(input){
    disp.value+=input;
}

function cleardis(){
    disp.value="";

}
function calculate(){
    try{
        disp.value=eval(disp.value);
    }
    catch(e){
        disp.value="Error";
    }
}