// js/script.js

const username = "shadejacobs";
const container = document.getElementById("projects-container");

async function getRepos() {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await res.json();

    repos.forEach(repo => {
      const card = document.createElement("div");
      card.className = "repo-card";
      card.innerHTML = `
        <h2>${repo.name}</h2>
        <p>${repo.description || "No description"}</p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>`;
      container.appendChild(card);
    });
  } catch (err) {
    console.error("Failed to fetch repos:", err);
  }
}

getRepos();
