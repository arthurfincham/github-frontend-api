const getAPIResponse = require('./src/github_api')

const exampleForm = document.getElementById("username");
const button = document.querySelector("#trigger-btn");
const card = document.querySelector("#dev_card");
const input = document.querySelector("#name_input");

const show_card = () => {
  input.style.display = 'none';
  card.style.display = 'block';
};


button.addEventListener("click", () => {
  let name = exampleForm.value;
  return getAPIResponse(name, show_card());
});

