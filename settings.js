// Check Login
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html";
}


// Theme Toggle

const themeToggle = document.getElementById("themeToggle");

window.addEventListener("DOMContentLoaded", () => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }

});

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        localStorage.setItem("theme", "light");
        alert("Light Mode Enabled");

    } else {

        localStorage.setItem("theme", "dark");
        alert("Dark Mode Enabled");
    }

});


// Clear All Data

const clearDataBtn =
document.getElementById("clearDataBtn");

clearDataBtn.addEventListener("click", () => {

    if (confirm("Are you sure you want to clear all saved data?")) {

        localStorage.removeItem("portfolio");
        localStorage.removeItem("watchlist");

        alert("All saved data cleared successfully!");
    }
});


// Logout

const logoutBtn =
document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {

    if (confirm("Do you want to logout?")) {

        localStorage.removeItem("isLoggedIn");

        window.location.href = "login.html";
    }

});