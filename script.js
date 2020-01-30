var calculateEle = document.body.querySelector(".calculator");

var number = Number(prompt("Enter a number"));
if(!isNaN(number)){
  var operator = prompt("Choose an operator: +,-,/,*");
  if(operator == "+" || operator == "-" || operator == "/" || operator == "*" ){
    var secondNumber = Number(prompt("Enter a second number"));
    if(!isNaN(secondNumber)){
      if(operator == "+"){
        var answer = number + secondNumber;
        calculateEle.innerHTML= answer;
      }else if(operator == "/"){
        var answer = number / secondNumber;
        calculateEle.innerHTML= answer;
      }else if(operator == "-"){
        var answer = number - secondNumber;
        calculateEle.innerHTML= answer;
      }else if (operator == "*"){
        var answer = number * secondNumber;
        calculateEle.innerHTML= answer;
      }
    }else{
     calculateEle.innerHTML="is not a second number";
    }
  }else{
    calculateEle.innerHTML="is not an operator";
  }
}else{
  calculateEle.innerHTML="is not a number";
}