const getAPIResponse = (name) => {
  console.log(`https://api.github.com/users/${name}`)
  fetch(`https://api.github.com/users/${name}`)
    .then(res => res.json())
    .then(data => {console.log(data)})
};

module.exports = getAPIResponse;


