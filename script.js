function telephoneCheck(str) {
  return /^1?\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/.test(str);
}

const title = document.getElementById("title");
const input = document.getElementById("input");
const button = document.getElementById("button");
const result = document.getElementById("result");

function check(tel) {
  if (telephoneCheck(tel)) {
      result.textContent = "This is a valid phone number!";
      result.style.color = "green";
  } else {
      result.textContent = "This is not a valid phone number!";
      result.style.color = "red";
  }
}

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    button.click();
  }
});

function setWidth() {
  input.style.width = "fit-content";
  button.style.width = "fit-content";
  style = window.getComputedStyle(title);
  wdt = style.getPropertyValue("width");
  input.style.width = wdt;
  button.style.width = wdt;
}

setWidth();
window.onresize = setWidth;