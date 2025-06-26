const container = document.getElementById('projects-container');
const username = 'YOUR_GITHUB_USERNAME';

fetch(`https://api.github.com/users/${shadejacobs}/repos`)
  .then(response => response.json())
  .then(repos => {
    repos.forEach(repo => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <h2>${repo.name}</h2>
        <p>${repo.description || 'No description provided'}</p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error fetching repos:', error);
  });