const number = document.querySelector(".input");
const button = document.querySelector(".submit");
const text = document.querySelector(".result");
let showingText = "";

button.addEventListener("click", () => {
  const num = number.value;
  const randomNumber = Math.floor(Math.random() * 11);

  if (num === "") {
    alert("Type the right number");
    text.innerHTML = "Wrong number";
  } else if (isNaN(num)) {
    alert("Type the right number");
    text.innerHTML = "Wrong number";
  } else if (num > 10) {
    alert("Enter between 1 to 10");
  } else {
  }

  if (num == randomNumber) {
    showingText = "You guessed right";
  } else {
    showingText = "You guessed wrong";
  }

  text.innerHTML = showingText;
  number.value = "";
  console.log(randomNumber);
});
