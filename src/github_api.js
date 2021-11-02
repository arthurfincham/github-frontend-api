const makeDoc = (data) => {
    let html = '';
        let htmlSegment = `<div class="user">
                            <img src="${data.avatar_url}" width="200" >
                            <h2>${data.name}</h2>
                            <h4>${data.company}</h4>
                            <h4>${data.location}</h4>
                            <p>${data.bio}</p>
                        </div>`;

        html += htmlSegment;

    let container = document.querySelector('.container');
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


