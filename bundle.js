(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/github_api.js
  var require_github_api = __commonJS({
    "src/github_api.js"(exports, module) {
      var makeDoc = (data) => {
        let html = "";
        let htmlSegment = `<div class="user">
                            <img src="${data.avatar_url}" width="200" >
                            <h2>${data.name}</h2>
                            <h4>${data.company}</h4>
                            <h4>${data.location}</h4>
                            <p>${data.bio}</p>
                        </div>`;
        html += htmlSegment;
        let container = document.querySelector(".container");
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
