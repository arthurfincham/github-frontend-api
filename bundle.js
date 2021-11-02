(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/github_api.js
  var require_github_api = __commonJS({
    "src/github_api.js"(exports, module) {
      var getAPIResponse2 = (name) => {
        console.log(`https://api.github.com/users/${name}`);
        fetch(`https://api.github.com/users/${name}`).then((res) => res.json()).then((data) => {
          console.log(data);
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
