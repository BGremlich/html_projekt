function forclear(){
document.getElementById("output").innerHTML = "0";
}

function percent(){
    document.getElementById("output").innerHTML = value / 100;
}

function remove_cero(){
    if (value == "0"){
        document.getElementById("output").innerHTML = "";
    }

}

function fordisplay(value){
    remove_cero();
    document.getElementById("output").innerHTML += value;
}

function solve(value){

}
