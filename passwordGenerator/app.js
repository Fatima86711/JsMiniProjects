const uppAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerAlphabets = "abcdefghijklmnopqrstuvwxyz";
const digits = "1234567890";
const symbols = "!@#$%^&*()_+=";
let pass = "";
let pass_txt = document.getElementById("pass");
let letters_count = document.getElementById("count").value;
const check_upper_letters = document.querySelector("#upper_case");
const check_lower_letters = document.querySelector("#lower_case ");
const check_nums = document.querySelector("#nums ");
const check_symb = document.querySelector("#symb");
document.getElementById("generate").addEventListener("click", function () {
  pass = "";
  letters_count = document.getElementById("count").value;
  generatePassword();
});
function getRandomData(data) {
  return data[Math.floor(Math.random() * data.length)];
}

function generatePassword() {
  let characters = "";
  if (check_upper_letters.checked) {
    characters += uppAlphabets;
  }
  if (check_lower_letters.checked) {
    characters += lowerAlphabets;
  }

  if (check_nums.checked) {
    characters += digits;
  }
  if (check_symb.checked) {
    characters += symbols;
  }
  pass = "";
  while (pass.length < letters_count) {
    pass += getRandomData(characters);
  }
  pass = pass.substring(0, letters_count);
  pass_txt.innerText = pass;
}
