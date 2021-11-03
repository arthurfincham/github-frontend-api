const makeDoc = (data) => {
    let html = '';
        let htmlSegment = `
        <div class="card_front_wrapper">
        <i id="github_logo_card" class="bi bi-github github_logo card__square"></i>
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
                            </div>`;

        html += htmlSegment;
        let html_back = '';
        let htmlSegment_back = `<div class="card_back_info">
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
    </div>`;
    html_back += htmlSegment_back


    let container = document.querySelector('.card__front ');
    let container_back = document.querySelector('.card__back ');
    container.innerHTML = html;
    container_back.innerHTML = html_back
}


const getAPIResponse = (name, callback) => {
  console.log(`https://api.github.com/users/${name}`)
  fetch(`https://api.github.com/users/${name}`)
    .then(res => res.json())
    .then(function(data){
      makeDoc(data)
    })
    callback;
};


module.exports = getAPIResponse;


