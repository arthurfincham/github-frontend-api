(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/github_api.js
  var require_github_api = __commonJS({
    "src/github_api.js"(exports, module) {
      var makeDoc = (data) => {
        let html = "";
        let htmlSegment = `<div class="left_column">
                            <img src="${data.avatar_url}"  class="card__front-square card__square">
                            <i id="github_logo_card" class="bi bi-github github_logo card__square"></i>
                            </div>
                            <div class="right_column">
                            <h3">${data.name}</h3>
                            <h4>${data.company}</h4>
                            <h4>${data.location}</h4>
                            <p>${data.bio}</p>
                        </div>`;
        html += htmlSegment;
        let container = document.querySelector(".card__front ");
        container.innerHTML = html;
      };
      var getAPIResponse2 = (name) => {
        console.log(`https://api.github.com/users/${name}`);
        fetch(`https://api.github.com/users/${name}`).then((res) => res.json()).then(function(data) {
          makeDoc(data);
        });
      };
      module.exports = getAPIResponse2;
    }
  });

  // index.js
  var getAPIResponse = require_github_api();
  var exampleForm = document.getElementById("username");
  var button = document.querySelector("#trigger-btn");
  button.addEventListener("click", () => {
    let name = exampleForm.value;
    return getAPIResponse(name);
  });
})();
