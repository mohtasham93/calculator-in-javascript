firstNumber =Number( prompt("enter the first value"));
operation = prompt("enter operation (+, - , *, /)");
secondNumber = Number(prompt("enter the second value"));
let result;
if(operation == "+"){
    result = firstNumber + secondNumber;
    alert(result);
}
else if(operation == "-"){
    result = firstNumber - secondNumber;
    alert(result);
}
else if(operation == "*"){
    result = firstNumber * secondNumber;
    alert(result);
}
else if(operation == "/"){
    if(secondNum !== 0){
     result = firstNumber / secondNumber;
    alert(result);
    }
    else{
        alert("cannnot divide by zero")
    }
  }
  else{
    alert("wrong number")
}




 

