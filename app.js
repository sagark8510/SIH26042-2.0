// App Core - Handles Offline Data & State
const App = {
  // Save & Get Language
  setLanguage: (lang) => localStorage.setItem("vl_lang", lang),
  getLanguage: () => localStorage.getItem("vl_lang") || "Santhali",

  // Save & Get User Phase (Lessons or AI)
  setPhase: (phase) => localStorage.setItem("vl_phase", phase),
  
  // Safe Navigation
  navigate: (page) => {
    window.location.href = page;
  },

  // Initialize UI
  init: () => {
    const langDisplay = document.getElementById("activeLanguage");
    if (langDisplay) {
      langDisplay.innerText = App.getLanguage();
    }
  }
};

window.addEventListener("DOMContentLoaded", App.init);
