
const projects = document.getElementById("projects")

function createProject(title, description, link) {
    projects.innerHTML += `
    <p class="project-seperator">___________________________________________________________________________________________________________________________________</p>
    <p class="project-headline">${title}</p>
    <p class="project-description">${description}</p>
    <p>
        <a href="${link}">Læs mere</a>
    </p>
    `
}

createProject("2048-game", "En klon af spillet 2048 clone lavet i html, css, javascript", "https://github.com/mtkonge/2048-game")
createProject("Tic-tac-toe", "Kryds og bolle lavet på to forskellige måder", "https://github.com/mtkonge/tic-tac-toe")