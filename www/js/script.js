// This is a JavaScript file

function dis(n){
 var num = document.getElementById("res");
 num.value += n;
}

function mem(){
 var num = document.getElementById("res");
 num.value = eval(num.value);
}

function cle(){
 var num = document.getElementById("res");
 num.value = '';
}

function equ(){
 var num = document.getElementById("res");
 num.value = eval(num.value);
}

function inc(){
 var num = document.getElementById("res");
 num.value = parseInt(num.value * 1.1);
}

function tax(){
 var num = document.getElementById("res");
 num.value = parseInt(num.value * 0.1);
}

function red(){
 var num = document.getElementById("res");
 num.value = parseInt(num.value * 1.08);
}