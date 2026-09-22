// Welcome Msg
window.addEventListener("load", () => {
    console.log("Admin Dashboard Loaded Successfully!");
});

// Switch btw dashboard sections from the sidebar.
const links = document.querySelectorAll(".nav-link[data-section]");
const sections = document.querySelectorAll(".dashboard-section");

links.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const sectionId = this.dataset.section;

        links.forEach(item => item.classList.remove("active"));
        this.classList.add("active");

        sections.forEach(section => {
            section.classList.toggle("active", section.id === sectionId);
        });
    });
});

// Quick Action Buttons
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        if (this.innerText === "Add Product") {
            alert("Redirecting to Add Product Page...");
        }

        if (this.innerText === "Manage Orders") {
            alert("Opening Orders...");
        }

        if (this.innerText === "Generate Report") {
            alert("Generating Report...");
        }

        if (this.innerText === "Settings") {
            alert("Opening Settings...");
        }

        if (this.innerText === "Get Started") {
            alert("Welcome to Admin Dashboard!");
        }
    });
});

// Live Date & Time
function updateTime() {
    const now = new Date();

    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();

    const element = document.getElementById("datetime");

    if (element) {
        element.innerHTML = `${date} | ${time}`;
    }
}

setInterval(updateTime, 1000);

// Card Hover Effect
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});