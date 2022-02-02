function telephoneCheck(str) {
  return /^1?\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/.test(str);
}

function check(tel) {
  const result = document.getElementById("result");
  if (telephoneCheck(tel)) {
      result.textContent = "This is a valid phone number!";
      result.style.color = "green";
  } else {
      result.textContent = "This is not a valid phone number!";
      result.style.color = "red";
  }
}

const input = document.getElementById("input");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button").click();
  }
});