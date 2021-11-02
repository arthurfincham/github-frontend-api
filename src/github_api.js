const makeDoc = (data) => {
    let html = '';
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

    let container = document.querySelector('.card__front ');
    container.innerHTML = html;
}


const getAPIResponse = (name) => {
  console.log(`https://api.github.com/users/${name}`)
  fetch(`https://api.github.com/users/${name}`)
    .then(res => res.json())
    .then(function(data){
      makeDoc(data)
    })
};


module.exports = getAPIResponse;


