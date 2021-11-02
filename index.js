const getAPIResponse = require('./src/github_api')

const exampleForm = document.getElementById("username");
const button = document.querySelector("#trigger-btn");

button.addEventListener("click", () => {
  let name = exampleForm.value;
  return getAPIResponse(name);
});