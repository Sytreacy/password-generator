//stretch goals
//ability to set password length
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

function randomResult() {
  let randomNo = Math.floor(Math.random() * characters.length);
  return characters[randomNo];
}

function generatePwd() {
  let pwd = "";
  for (let i = 0; i < 15; i++) {
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
