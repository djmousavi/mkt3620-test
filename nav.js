// Navigation configuration data
const navData = {
    primaryLinks: [
        { title: "Home", url: "index.html" },
        { title: "About Us", url: "about.html" },
        { title: "Services", url: "services.html" },
        { title: "Contact", url: "contact.html" }
    ],
    secondaryLinks: [
        { title: "FAQ", url: "faq.html" },
        { title: "Blog", url: "blog.html" },
        { title: "Support", url: "support.html" }
    ]
};

// Function to render Top Header Navigation
function renderTopNavigation() {
    const topContainer = document.getElementById('top-nav-container');
    if (!topContainer) return;

    const primaryHtml = navData.primaryLinks.map(link => `<a href="${link.url}">${link.title}</a>`).join(' | ');
    const secondaryHtml = navData.secondaryLinks.map(link => `<a href="${link.url}">${link.title}</a>`).join(' | ');

    topContainer.innerHTML = `
        <div class="top-nav">
            <div class="primary-nav"><strong>Primary navigation:</strong> ${primaryHtml}</div>
            <div class="secondary-nav">Secondary navigation if needed: ${secondaryHtml}</div>
        </div>
    `;
}

// Function to render Left Side Navigation
function renderSideNavigation() {
    const sideContainer = document.getElementById('side-nav-container');
    if (!sideContainer) return;

    const primaryList = navData.primaryLinks.map(link => `<li><a href="${link.url}">${link.title}</a></li>`).join('');
    const secondaryList = navData.secondaryLinks.map(link => `<li><a href="${link.url}">${link.title}</a></li>`).join('');

    sideContainer.innerHTML = `
        <div class="side-nav">
            <div class="side-primary">
                <h3>Primary Navigation</h3>
                <ul>${primaryList}</ul>
            </div>
            <div class="side-secondary">
                <h4>Secondary Navigation</h4>
                <ul>${secondaryList}</ul>
            </div>
        </div>
    `;
}

// Initialize navigation elements on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    renderTopNavigation();
    renderSideNavigation();
});
