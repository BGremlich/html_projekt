function forclear(){
document.getElementById("output").innerHTML = "0";
}

function percent(){
    var value = document.getElementById("output").innerHTML;
    value = value / 100
    document.getElementById("output").innerHTML = value;
}

function remove_zero(){
    var value = document.getElementById("output").innerHTML;
    if (value == "0"){
        value = " "
        document.getElementById("output").innerHTML = value;
    }

}

function fordisplay(value){
    remove_zero();
    document.getElementById("output").innerHTML += value;
}

function solve(){
    remove_zero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById('output').innerHTML = solved;
}
