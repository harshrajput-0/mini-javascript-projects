let a = "";
let b = "";

function add(){
  a = calculator.display.value;
  b = a.charAt(a.length-1);
  
  if (b == '+' || b == '-' || b == '*' || b == '/'){
    calculator.display.value = a.substring(0, a-1);
    calculator.display.value += "+";
  }else{
    calculator.display.value += "+";
  }
}



function sub(){
  a = calculator.display.value;
  b = a.charAt(a.length-1);
  
  if (b == '+' || b == '-' || b == '*' || b == '/'){
    calculator.display.value = a.substring(0, a-1);
    calculator.display.value += "-";
  }else{
    calculator.display.value += "-";
  }
}


function multi(){
  a = calculator.display.value;
  b = a.charAt(a.length-1);
  
  if (b == '+' || b == '-' || b == '*' || b == '/'){
    calculator.display.value = a.substring(0, a-1);
    calculator.display.value += "*";
  }else{
    calculator.display.value += "*";
  }
}


function div(){
  a = calculator.display.value;
  b = a.charAt(a.length-1);
  
  if (b == '+' || b == '-' || b == '*' || b == '/'){
    calculator.display.value = a.substring(0, a-1);
    calculator.display.value += "/";
  }else{
    calculator.display.value += "/";
  }
}