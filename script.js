//WINDOW
function operate(num1, num2, op) {

  switch(op) {
    case "add":
      return num1 + num2;
      break;
    case "subt":
      return num1 - num2;
      break;
    case "mult":
      return num1 * num2;
      break;
    case "div":
      if (num2 == 0) {
        return null;
      }
      else {
        return num1 / num2;
      }
      break;
  }
}

function addOn(addString) {

  //concatonating the right operator
  let concatOp = "";

  switch(addString) {
    case "add":
      concatOp = " + ";
      break;
    case "subt":
      concatOp = " - ";
      break;
    case "mult":
      concatOp = " x ";
      break;
    case "div":
      concatOp = " / ";
      break;
  }

  //figure this part out
  let length = numArray.length;

  if (length == 1) {
    eqString = numString.concat(concatOp);
    document.getElementById("eqConcat").innerHTML = eqString;
    numString = "";
  }
  else if (length == 2) {
    let hold1 = Number(numArray[0]);
    let hold2 = Number(numArray[1]);
    let concatHold = op[0];

    let total = operate(hold1, hold2, concatHold);
    if (total == null) {
      document.getElementById("eqEnter").innerHTML = "UNDEFINED";
      //add other things here to clean up the visuals
    }

    op.shift();
    let numTotal = total.toString();
    numArray = [];
    numArray.push(numTotal);
    eqString = numTotal.concat(concatOp);
    document.getElementById("eqConcat").innerHTML = eqString;
    numString = "";
  }
}

//ARITHMETICS
let op = [];
let numArray = [];
let boolDot = false;
let numString = "";
let eqString = "";

//operators
function btnAdd() {
  if (numString == "") {
    return;
  }
  deleteDot();
  boolDot = false;
  op.push("add");
  numArray.push(numString);
  addOn("add");
}

function btnSubt() {
  if (numString == "") {
    return;
  }
  deleteDot();
  boolDot = false;
  op.push("subt");
  numArray.push(numString);
  addOn("subt");
}

function btnMult() {
  if (numString == "") {
    return;
  }
  deleteDot();
  boolDot = false;
  op.push("mult");
  numArray.push(numString);
  addOn("mult");
}

function btnDiv() {
  if (numString == "") {
    return;
  }
  deleteDot();
  boolDot = false;
  op.push("div");
  numArray.push(numString);
  addOn("div");
}

//buttons
function btnEqual() {
  //eqConcat
  let result = eqString.concat(numString);
  document.getElementById("eqConcat").innerHTML = result.concat(" = ");

  //eqEnter
  numArray.push(numString);
  let hold1 = Number(numArray[0]);
  let hold2 = Number(numArray[1]);
  let concatHold = op[0];

  let total = operate(hold1, hold2, concatHold);
  if (total == null) {
    document.getElementById("eqEnter").innerHTML = "UNDEFINED";
    //add other things here to clean up the visuals
  }
  op.shift();
  let numTotal = total.toString();
  numArray = [];
  numArray.push(numTotal);
  document.getElementById("eqEnter").innerHTML = numTotal;
  numString = "";
}

function btnClear() {
  boolDot = false;
  numString = "";
  eqString = "";
  numArray = [];
  op = [];
  document.getElementById("eqEnter").innerHTML = "&nbsp;";
  document.getElementById("eqConcat").innerHTML = "&nbsp;";
}

function btnDelete() {
  if (numString == "") {
    boolDot = false;
    return;
  } else if (numString.length == 1) {
    console.log(numString.length);
    boolDot = false;
    numString = "";
    document.getElementById("eqEnter").innerHTML = "0";
    return;
  } else if (numString == "UNDEFINED") {
    btnClear();
    return;
  }

  //if you delete dot, you should be able to retype it
  if (isDot() == true) {
    boolDot = false;
  }

  //delete last char in string
  let del = numString.length - 1;
  let result = numString.substring(0, del);
  numString = result;
  document.getElementById("eqEnter").innerHTML = numString;
}

//DOT
function isDot() {
  let del = numString.length - 1;
  let checkDot = numString.substring (del, numString.length);
  if (checkDot == ".") {
    return true;
  }
  else {
    return false;
  }
}

function deleteDot() {
  let del = numString.length - 1;
  let checkDot = numString.substring (del, numString.length);
  if (checkDot == ".") {
    let result = numString.substring(0, del);
    numString = result;
  }
  else {
    return;
  }
}

function btnDot() {
  if (numString == "") {
    return;
  }
  if (numString.length > 12) {
    return;
  }

  if (boolDot == false) {
    boolDot = true;

    let result = numString.concat(".");
    numString = result;
    document.getElementById("eqEnter").innerHTML = result;
  } else {
    return;
  }
}

//NUMBERS
function zero() {
  if (numString.length > 12) {
    return;
  }

  let result = numString.concat("0");
  numString = result;
  document.getElementById("eqEnter").innerHTML = result;
}

function one() {
  if (numString.length > 12) {
    return;
  }

  let result = numString.concat("1");
  numString = result;
  document.getElementById("eqEnter").innerHTML = result;
}

function two() {
  if (numString.length > 12) {
    return;
  }

  let result = numString.concat("2");
  numString = result;
  document.getElementById("eqEnter").innerHTML = result;
}

function three() {
  if (numString.length > 12) {
    return;
  }

  let result = numString.concat("3");
  numString = result;
  document.getElementById("eqEnter").innerHTML = result;
}

function four() {
  if (numString.length > 12) {
    return;
  }

  let result = numString.concat("4");
  numString = result;
  document.getElementById("eqEnter").innerHTML = result;
}

function five() {
  if (numString.length > 12) {
    return;
  }

  let result = numString.concat("5");
  numString = result;
  document.getElementById("eqEnter").innerHTML = result;
}

function six() {
  if (numString.length > 12) {
    return;
  }

  let result = numString.concat("6");
  numString = result;
  document.getElementById("eqEnter").innerHTML = result;
}

function seven() {
  if (numString.length > 12) {
    return;
  }

  let result = numString.concat("7");
  numString = result;
  document.getElementById("eqEnter").innerHTML = result;
}

function eight() {
  if (numString.length > 12) {
    return;
  }

  let result = numString.concat("8");
  numString = result;
  document.getElementById("eqEnter").innerHTML = result;
}

function nine() {
  if (numString.length > 12) {
    return;
  }

  let result = numString.concat("9");
  numString = result;
  document.getElementById("eqEnter").innerHTML = result;
}
