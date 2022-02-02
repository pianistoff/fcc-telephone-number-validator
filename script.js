function palindrome(str) {
    const converted = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    const arr = [];
    converted.split('').forEach(letter => arr.unshift(letter));
    if (converted === arr.join('')) {
      return true;
    } else {
      return false
    }
  }

function display(str) {
    const result = document.getElementById("result");
    if (palindrome(str)) {
        result.textContent = "This is a palindrome!";
        result.style.color = "green";
    } else {
        result.textContent = "This is not a palindrome!";
        result.style.color = "red";
    }
}