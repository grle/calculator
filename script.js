const buttons = document.getElementsByClassName("btn");
let boolDot = false;
let num1 = "";
let num2 = "";
let op = "";
let concatStr = "";

const getButtons = () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
      setEquation(buttons[i].innerHTML);
    });
  }
}
getButtons();

function setEquation(str) {
  //filter out numbers
  if (str == "CLEAR") {
    btnClear();
    return;
  } else if (str == "DELETE") {
    btnDelete();
    return;
  } else if (str == "+" || str == "-" || str == "x" || str == "÷") {
    btnOperate(str);
    return;
  } else if (str == "=") {
    btnEqual();
    return;
  } else if (str == ".") {
    btnDot();
    return;
  }

  if (num1.length < 13) {
    let getNum1 = num1.concat(str);
    num1 = getNum1;
    document.getElementById("eqEnter").innerHTML = num1;
  }
}

function btnOperate(str) {
  //one number
  if (num2 == "") {
    concatStr = num1.concat(` ${str} `);
    num2 = num1;
  }

  //two numbers
  else {
    let n1 = Number(num1);
    let n2 = Number(num2);

    let result = myOp(op, n2, n1);
    //check UNDEFINED
    if (result == "UNDEFINED") {
      concatStr = `${n2} ${op} ${n1} = `;
      document.getElementById("eqEnter").innerHTML = result;
      document.getElementById("eqConcat").innerHTML = concatStr;
      return;
    }

    num2 = result.toString();
    concatStr = num2.concat(` ${str} `);
  }
  op = str;
  num1 = "";
  document.getElementById("eqConcat").innerHTML = concatStr;
}

function myOp(str, n2, n1) {
  let n = 0;
  switch (str) {
    case "+":
      n = add(n2, n1);
      break;
    case "-":
      n = sub(n2, n1);
      break;
    case "x":
      n = mul(n2, n1);
      break;
    case "÷":
      n = div(n2, n1);
      break;
  }
  return n;
}

function btnEqual() {
  let n1 = Number(num1);
  let n2 = Number(num2);
  let result = myOp(op, n2, n1);

  //limit digits concatStr "...9999 x 9999999999999 = "
  concatStr = `${n2} ${op} ${n1} = `;
  document.getElementById("eqEnter").innerHTML = result;
  document.getElementById("eqConcat").innerHTML = concatStr;

  //CLEAR
  num2 = "";
  num1 = "";
  boolDot = false;
  concatStr = "";
}

function btnDot() {
  if (boolDot == true) return;
  if (num1.length < 13) {
    let getNum = num1.concat(".");
    num1 = getNum;
    document.getElementById("eqEnter").innerHTML = num1;
    boolDot = true;
  }
}

function btnClear() {
  num1 = "";
  num2 = "";
  boolDot = false;
  concatStr = "";
  document.getElementById("eqConcat").innerHTML = "&nbsp;";
  document.getElementById("eqEnter").innerHTML = 0;
}

function btnDelete() {
  let del = num1.length - 1;
  let result = num1.substring(0, del);

  //check dot
  let checkDot = num1.substring(del, num1.length);
  if (checkDot == ".") boolDot = false;

  num1 = result;
  document.getElementById("eqEnter").innerHTML = num1;
  if (num1.length == 0) {
    document.getElementById("eqEnter").innerHTML = 0;
  }
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b == 0) return "UNDEFINED";
  return a / b;
}
