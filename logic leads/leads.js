// Select elements
const vehicleInput = document.querySelector('.card-body input');
const proceedButton = document.querySelector('.card-body button');

// Add event listener for "Proceed" button
proceedButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent page reload

  const vehicleNumber = vehicleInput.value.trim();

  if (vehicleNumber === "") {
    alert("⚠️ Please enter a valid vehicle number.");
    vehicleInput.focus();
    return;
  }

  // Optional: Basic format validation (like MH12AB1234)
  const regex = /^[A-Z]{2}\d{2}[A-Z]{1,2}\d{4}$/i;
  if (!regex.test(vehicleNumber)) {
    alert("🚗 Invalid vehicle number format.\nExample: MH12AB1234");
    return;
  }

  // Store in localStorage for later use (optional)
  localStorage.setItem("vehicleNumber", vehicleNumber);

  // Show success message
  alert(`✅ Vehicle ${vehicleNumber} verified!\nRedirecting to payment page...`);

  // Simulate redirection (you can change to real payment.html)
  window.location.href = "payment.html";
});
// FASTag Provider Filter
const searchBox = document.getElementById('searchBox');
const cards = document.querySelectorAll('.provider-card');

searchBox.addEventListener('input', function () {
  const query = this.value.toLowerCase();

  cards.forEach(card => {
    const name = card.querySelector('p').textContent.toLowerCase();
    card.style.display = name.includes(query) ? 'block' : 'none';
  });
});

// Redirect on click
cards.forEach(card => {
  card.addEventListener('click', () => {
    const provider = card.querySelector('p').textContent;
    alert(`Redirecting to recharge page for ${provider}`);
    // window.location.href = "payment.html"; // Uncomment for live integration
  });
});
const faqs = document.querySelectorAll('.faq-item');
faqs.forEach(item => {
  const answer = item.querySelector('.faq-answer');
  item.querySelector('.faq-question').addEventListener('click', () => {
    if (item.classList.contains('active')) {
      answer.style.maxHeight = null;
      item.classList.remove('active');
    } else {
      faqs.forEach(f => {
        f.classList.remove('active');
        f.querySelector('.faq-answer').style.maxHeight = null;
      });
      item.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

const card = document.querySelector(".card");
const rechargeBtn = document.querySelector(".recharge-btn");

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  card.style.setProperty("--x", `${x}px`);
  card.style.setProperty("--y", `${y}px`);
});

rechargeBtn.addEventListener("click", () => {
  rechargeBtn.innerText = "Processing...";
  rechargeBtn.style.background = "#48cae4";
  setTimeout(() => {
    rechargeBtn.innerText = "Recharge Successful ✅";
    rechargeBtn.style.background = "#06d6a0";
  }, 1500);
});
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
