document.addEventListener("DOMContentLoaded", () => {
  const loginModal = document.getElementById("loginModal");
  const userIcon = document.querySelector(".user-icon");

  // ✅ Show modal
  if (userIcon) {
    userIcon.addEventListener("click", () => {
      loginModal.style.display = "flex";
    });
  }

  // ✅ Close modal
  window.closeLogin = function() {
    loginModal.style.display = "none";
  }

  // ✅ Close when clicked outside
  window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
      closeLogin();
    }
  });

  // ✅ Handle login
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("⚠️ Please enter both email and password.");
      return;
    }

    alert("✅ Login successful!");
    closeLogin();
  });
});