const makeDoc = (data) => {
    let html = '';
        let htmlSegment = `<div class="left_column">
                            <img src="${data.avatar_url}"  class="card__front-square card__square">
                            <i id="github_logo_card" class="bi bi-github github_logo card__square"></i>
                            </div>
                            <div class="right_column">
                            <p id="bold_id">${data.id}</p>
                            <p>${data.name}</p>
                            <p>${data.company}</p>
                            <p>${data.location}</p>
                            <p id="small_desc">${data.bio}</p>
                            </div>`;

        html += htmlSegment;
        let html_back = '';
        let htmlSegment_back = `<div class="card_back_info">
                            <p>1. ${data.created_at}</p>
                            <p>2. ${data.updated_at}</p>
                            <p>3. ${data.public_repos}</p>
                            <p>4. ${data.followers}</p>
                            <p>5. ${data.following}</p>
                            
                        </div>
                        <div class="card_back_descriptors">
      <p>1. Created at; 2. Updated at; 3. Repositories; 4. Followers; 5. Following;</p>
    </div>`;
    html_back += htmlSegment_back


    let container = document.querySelector('.card__front ');
    let container_back = document.querySelector('.card__back ');
    container.innerHTML = html;
    container_back.innerHTML = html_back
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


