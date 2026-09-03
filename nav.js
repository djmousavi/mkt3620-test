document.addEventListener("DOMContentLoaded", function () {
    const navHTML = `
        <nav style="background-color: #f8f9fa; padding: 1rem; border-bottom: 1px solid #e9ecef; margin-bottom: 2rem;">
            <ul style="list-style: none; margin: 0; padding: 0; display: flex; gap: 2rem;">
                <li><a href="index.html" style="text-decoration: none; color: #0056b3; font-weight: bold;">About Me</a></li>
                <li><a href="research.html" style="text-decoration: none; color: #0056b3; font-weight: bold;">Research</a></li>
                <li><a href="teaching.html" style="text-decoration: none; color: #0056b3; font-weight: bold;">Teaching</a></li>
                <li><a href="personal.html" style="text-decoration: none; color: #0056b3; font-weight: bold;">Personal</a></li>
            </ul>
        </nav>
    `;

    // Inserts the navbar at the very top of the <body> element
    document.body.insertAdjacentHTML("afterbegin", navHTML);
});
