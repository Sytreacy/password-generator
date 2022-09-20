//stretch goals
//toggle "symbols" and "numbers" on/off

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let pwdLength = document.getElementById("pwd-length").value;
function randomResult() {
  let randomNo = Math.floor(Math.random() * characters.length);
  return characters[randomNo];
}

//pwd length changing or not? before generating pwd
document.getElementById("pwd-length").addEventListener("input", () => {
  if (pwdLength <= 20 || pwdLength.length <= 2) {
    pwdLength = document.getElementById("pwd-length").value;
  }
  if (pwdLength > 20 || pwdLength.length > 2) {
    document.getElementById("pwd-length").value = 20; // if any larger value than 20 is set, change to 20 in input box
    pwdLength = 20; // set 20 value for length to execute in generatePwd()
  }
});

function generatePwd() {
  let pwd = "";

  for (let i = 0; i < pwdLength; i++) {
    pwd += randomResult();
  }
  return pwd;
}

function generatePwds() {
  pwd1.textContent = generatePwd();
  pwd2.textContent = generatePwd();
  pwd1.addEventListener("click", copyText);
  pwd2.addEventListener("click", copyText);
}

let generatePwdBtn = document.getElementById("generate-pwd");
generatePwdBtn.addEventListener("click", generatePwds);

let pwd1 = document.getElementsByClassName("password-1")[0];
let pwd2 = document.getElementsByClassName("password-2")[0];

//"copy on click"
function copyText(event) {
  const cb = navigator.clipboard; //navigator : navigator object is used for browser detection. The Clipboard object used to access the system clipboard.
  const textToCopy = event.currentTarget;
  cb.writeText(textToCopy.textContent).then(() => copySuccess(event)); //.writeText writes the specified text string to the system clipboard.
}

function copySuccess(event) {
  let searchMsg = event.target.parentElement.parentElement; //pw-box-container

  // to not get spammed with "copied" text many times
  if (searchMsg.children.length !== 2) {
    let textSuccess = document.createElement("p");
    textSuccess.classList.add("copy-success");
    event.target.parentElement.parentElement.appendChild(textSuccess);
    textSuccess.textContent = "copied!";
    setTimeout(() => {
      textSuccess.remove(); // remove the success text after 1 second
    }, 1000);
  }
}

//prevent all other characters except "Enter, Backspace (["Backspace", "Enter"]) and all numbers [0-9]"
let pwdInput = document.getElementById("pwd-length");
pwdInput.defaultValue = 15;
let min = 4;
let max = 20;

pwdInput.addEventListener("keypress", ({ key, preventDefault }) => {
  if (isNaN(parseInt(key, 10)) && !["Enter"].includes(key)) {
    event.preventDefault();
  }
});

//remove arrows
// let removeOnce = setInterval(removeArrows, 500);

// function removeArrows() {
//   if (pwdInput.value > min && pwdInput.value < max) {
//     checkInputValueAndAddArrows();
//   } else if (pwdInput.value >= max) {
//     document.getElementsByClassName("right-arrow")[0].remove();
//     clearInterval(removeOnce);
//   } else if (pwdInput.value <= min) {
//     document.getElementsByClassName("left-arrow")[0].remove();
//     clearInterval(removeOnce);
//   }
// }

// let parentInputDiv = document.getElementsByClassName(
//   "pwd-length-input-container"
// )[0];

// function addLeftArrow() {
//   let leftArrow = document.createElement("span");
//   parentInputDiv.appendChild(leftArrow);
//   leftArrow[0].classList.add("arrows left-arrow");
//   leftArrow.textContent = "<";
// }

// function addRightArrow() {
//   let rightArrow = document.createElement("span");
//   parentInputDiv.appendChild(rightArrow);
//   rightArrow[0].classList.add("arrows right-arrow");
//   rightArrow.textContent = ">";
// }

// function checkInputValueAndAddArrows() {
//   if (document.getElementsByClassName("right-arrow").length !== 1) {
//     addRightArrow();
//   }
//   if (document.getElementsByClassName("left-arrow").length !== 1) {
//     addLeftArrow();
//   }
// }
