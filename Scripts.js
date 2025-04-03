document.addEventListener("DOMContentLoaded", function() {
    updateStreak();
});

function toggleMenu() {
    let nav = document.getElementById("nav-menu");
    if (nav.style.left === "0px") {
        nav.style.left = "-250px";
    } else {
        nav.style.left = "0px";
    }
}

function updateStreak() {
    let lastVisit = localStorage.getItem("lastVisit");
    let streak = parseInt(localStorage.getItem("streak")) || 0;
    let today = new Date().toLocaleDateString();

    if (lastVisit !== today) {
        streak++;
        localStorage.setItem("streak", streak);
        localStorage.setItem("lastVisit", today);
    }

    document.getElementById("streak").innerText = streak;
}
