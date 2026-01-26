import "./style.css";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/about";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { AllProjects } from "./pages/AllProjects";
import { Contact } from "./pages/Contact";

import emailjs from "@emailjs/browser";
import { initContactForm } from "./utils/sendMail";

// 🔥 INIT EMAILJS (ONLY ONCE)
emailjs.init("Qe63PjyAAw6bxZx6E");

const app = document.getElementById("app")!;

// ===============================
// NAV ACTIVE LOGIC
// ===============================
function attachNavActiveLogic() {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

// ===============================
// RENDER FUNCTION
// ===============================
function render() {
  const hash = window.location.hash;

  // ===============================
  // PROJECTS PAGE
  // ===============================
  if (hash === "#/projects") {
    app.innerHTML = `
      ${Header()}
      ${AllProjects()}
    `;

    attachNavActiveLogic();

    // 🔥 FORCE scroll to top (FIX 1)
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  // ===============================
  // HOME FLOW
  // ===============================
  app.innerHTML = `
  <div class="min-h-screen flex flex-col">
    
    <div class="flex-grow">
      ${Header()}
      ${Hero()}
      ${About()}
      ${Services()}
      ${Projects()}
      ${Contact()}
    </div>

  </div>
`;

  attachNavActiveLogic();
  initContactForm();

  // ===============================
  // SCROLL HANDLING
  // ===============================

  // Home click
  if (hash === "#/home" || hash === "") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  // Other sections
  else if (hash) {
    const sectionId = hash.replace("#/", "");
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  }
}

// ===============================
// ROUTE CHANGE HANDLER
// ===============================
window.addEventListener("hashchange", render);

// ===============================
// INITIAL LOAD
// ===============================
render();

// ===============================
// VIEW ALL PROJECTS BUTTON
// ===============================
document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  if (target.id === "view-all-projects") {
    window.location.hash = "#/projects";
  }
});

// ===============================
// BACK TO PROJECTS SECTION
// ===============================
document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  if (target.id === "back-to-projects") {
    window.location.hash = "#/home";

    // scroll after render
    setTimeout(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  }
});

// ===============================
// HERO VIEW PROJECTS BUTTON
// ===============================
document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  if (target.id === "hero-view-projects") {
    window.location.hash = "#/projects";
  }
});
