import { useEffect, useState } from 'react';

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/SheluvVanny/repos')
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <section id="projects" style={{ padding: "2rem" }}>
      <h2>My Projects</h2>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;

