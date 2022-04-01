// Get the DOM nodes
let github = document.querySelector('#github');

/**
 * Render the UI
 * @param  {Object} data The GitHub data
 */
function render (data) {
  github.innerHTML =
    `<div class="gh-grid">
      <div class="gh-avatar">
        <p><img alt="" src="${data.avatar_url}"></p>
      </div>
      <div class="gh-details">
        <p>
          <strong>${data.name}</strong><br>
          ${data.location}<br>
          <em><a href="${data.url}">${data.public_repos} public repos</a></em>
        </p>
      </div>
    </div>`;
}

// Call the GitHub API
fetch('https://api.github.com/users/cferdinandi').then(function (response) {
  if (response.ok) {
    return response.json();
  }
  throw response;
}).then(function (data) {
  console.log(data);
  render(data);
}).catch(function (error) {
  console.warn(error);
});