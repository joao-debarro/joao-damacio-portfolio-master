document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById('toggle-dark-mode');

  if (localStorage.getItem('dark-mode') === 'enabled') {
      document.body.classList.add('dark-mode');
      toggleButton.textContent = 'Desativar Modo Escuro';
  }

  toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      
      if (document.body.classList.contains('dark-mode')) {
          localStorage.setItem('dark-mode', 'enabled');
          toggleButton.textContent = 'Desativar Modo Escuro';
      } else {
          localStorage.setItem('dark-mode', 'disabled');
          toggleButton.textContent = 'Ativar Modo Escuro';
      }
  });
  function loadPage(page) {
      fetch(`${page}.html`)
          .then(response => {
              if (!response.ok) {
                  throw new Error(`Erro ao carregar a página: ${page}`);
              }
              return response.text();
          })
          .then(html => {
              console.log(`Carregando ${page}.html...`);
              document.querySelector("#content").innerHTML = html;
              if (page === "projects") loadProjects();
          })
          .catch(error => console.error(error));
  }

  loadPage("index");

  document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", (event) => {
          event.preventDefault();
          const page = link.getAttribute("href").replace(".html", "");
          loadPage(page);
      });
  });

  function loadProjects() {
      const projectsList = document.querySelector("#projects-list");
      if (!projectsList) return;

      console.log("Página de Projetos carregada!");

      fetch('https://api.github.com/users/joao-debarro/repos')
          .then(response => response.json())
          .then(repos => {
              projectsList.innerHTML = repos.map(repo =>
                  `<li>
                      <h3>${repo.name}</h3>
                      <p>${repo.description || 'Sem descrição'}</p>
                      <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">Acessar no GitHub</a>
                  </li>`
              ).join("");
          })
          .catch(error => {
              projectsList.innerHTML = '<p>Erro ao carregar projetos.</p>';
              console.error(error);
          });
  }
});
