// This is the main JavaScript file for the personal portfolio website.
// It handles navigation, event listeners, and dynamic content loading.

document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation
    initNavigation();

    // Load dynamic content based on the current page
    loadDynamicContent();
});

function initNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetPage = event.target.getAttribute('href');
            loadPage(targetPage);
        });
    });
}

function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.body.innerHTML = html;
            initNavigation(); // Reinitialize navigation for the new page
            loadDynamicContent(); // Load dynamic content for the new page
        })
        .catch(error => console.error('Error loading page:', error));
}

function loadDynamicContent() {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'projects.html') {
        loadProjects();
    }
}

function loadProjects() {
    fetch('./data/projects.json')
        .then(response => response.json())
        .then(projects => {
            const projectsContainer = document.getElementById('projects');
            projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');
                projectElement.innerHTML = `
                    <h2>${project.title}</h2>
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank">View Project</a>
                `;
                projectsContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error('Error loading projects:', error));
}