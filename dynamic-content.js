let currentTab = "overview"; // default

function showContent(section) {
    if (window.event && typeof event.preventDefault === "function") event.preventDefault();
    currentTab = section;
    const lang = localStorage.getItem("language") || "EN";

    // Update active navigation highlight
    document.querySelectorAll('#about-nav a').forEach(link => link.classList.remove('active'));
    const activeNav = document.getElementById(`nav-${section}`);
    if (activeNav) activeNav.classList.add('active');

    let html = "";
    if (section === "overview") {
        html = overview[lang] || overview.EN;
    } else if (section === "history") {
        html = history[lang] || history.EN;
    } else if (section === "ourfield") {
        html = ourfield[lang] || ourfield.EN;
    }

    document.getElementById('dynamic-content').innerHTML = html;
}
document.addEventListener("DOMContentLoaded", function() {
    showContent("overview");
});