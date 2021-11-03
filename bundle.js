(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/github_api.js
  var require_github_api = __commonJS({
    "src/github_api.js"(exports, module) {
      var makeDoc = (data) => {
        let html = "";
        let htmlSegment = `
        <div class="card__front card__part" id="front_of_card">
          <div class="card_front_wrapper">
            <i id="github_logo_card" class="bi bi-github github_logo card__square"></i>
            <span class="holo-back"></span>
            <h5>${data.type}${data.id}</h5>
            <h4>DEV LICENCE</h4>
            <div class="card_front_content">
              <div class="left_column">
                <img src="${data.avatar_url}"  class="card__front-square card__square">
              </div>
              <div class="right_column">
                <ol id="font_ol">
                  <li>${data.name}</li>
                  <li>${data.company}</li>
                  <li>${data.location}</li>
                  <li><span class="smaller_text">${data.bio}</span></li>
                  <li><span class="smaller_text">${data.html_url}</span></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div class="card__back card__part" id="back_of_card">
          <div class="card_back_info">
            <table>
              <tr><td>7.</td><td>${data.created_at}</td></tr>
              <tr><td>8.</td><td>${data.updated_at}</td></tr>
              <tr><td>9.</td><td>${data.public_repos}</td></tr>
              <tr><td>10.</td><td>${data.followers}</td></tr>
              <tr><td>11.</td><td>${data.following}</td></tr>
            </table>
          </div>
          <div class="card_back_descriptors">
            <p>1. ID; 2. Name; 3. Company; 4. Location; 5. Biography; 6: URL; 7. Created at; 8. Updated at; 9. Repositories; 10. Followers; 11. Following;</p>
          </div>
        </div>
        `;
        html += htmlSegment;
        let container = document.querySelector("#dev_card");
        container.innerHTML = html;
      };
      var getAPIResponse2 = (name, callback) => {
        console.log(`https://api.github.com/users/${name}`);
        fetch(`https://api.github.com/users/${name}`).then((res) => res.json()).then(function(data) {
          makeDoc(data);
        });
        callback;
      };
      module.exports = getAPIResponse2;
    }
  });

  // index.js
  var getAPIResponse = require_github_api();
  var exampleForm = document.getElementById("username");
  var button = document.querySelector("#trigger-btn");
  var card = document.querySelector("#dev_card");
  var input = document.querySelector("#name_input");
  var front = document.querySelector("#front_of_card");
  var back = document.querySelector("#back_of_card");
  var show_card = () => {
    input.style.display = "none";
    card.style.display = "block";
  };
  button.addEventListener("click", () => {
    let name = exampleForm.value;
    return getAPIResponse(name, show_card());
  });
})();
