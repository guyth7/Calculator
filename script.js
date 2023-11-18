const userInput = document.getElementById("userInput");
var exp = '';
function press(num){
    exp += num;
    userInput.value = exp;
}
function equal(){
    userInput.value = eval(exp);
    exp = '';
}
function erase(){
exp ='';
userInput.value = exp;
}