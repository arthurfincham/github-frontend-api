const getAPIResponse = require('./src/github_api')

const exampleForm = document.getElementById("username");
const button = document.querySelector("#trigger-btn");
const card = document.querySelector("#dev_card");
const input = document.querySelector("#name_input");
const front = document.querySelector("#front_of_card");
const back = document.querySelector("#back_of_card");

const show_card = () => {
  input.style.display = 'none';
  card.style.display = 'block';
};

const add_rotation = () => {
  card.classList.add("rotation");
  front.classList.add("rotation");
  front.classList.add("rotation__front");
  back.classList.add("rotation");
  back.classList.add("rotation__back");
}

function myFunction() {
  setTimeout(add_rotation, 2000);
}

button.addEventListener("click", () => {
  let name = exampleForm.value;
  myFunction();
  return getAPIResponse(name, show_card());
});

