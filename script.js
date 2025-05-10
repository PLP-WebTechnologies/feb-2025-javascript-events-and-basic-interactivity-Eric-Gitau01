// 1. Click event
document.getElementById("click-btn").addEventListener("click", () => {
    document.getElementById("click-result").textContent = "You clicked the button!";
  });
  
  // 2. Hover effects
  const hoverBox = document.getElementById("hover-box");
  hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.backgroundColor = "#ffd700";
    document.getElementById("hover-result").textContent = "Hover detected!";
  });
  hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.backgroundColor = "lightblue";
    document.getElementById("hover-result").textContent = "";
  });
  
  // 3. Keypress detection
  document.getElementById("key-input").addEventListener("keydown", (e) => {
    document.getElementById("key-result").textContent = `Key pressed: ${e.key}`;
  });
  
  // 4. Double click or long press
  let pressTimer;
  const secretBtn = document.getElementById("secret-btn");
  secretBtn.addEventListener("mousedown", () => {
    pressTimer = setTimeout(() => {
      document.getElementById("secret-result").textContent = "Long press activated! 🤫";
    }, 1000);
  });
  secretBtn.addEventListener("mouseup", () => {
    clearTimeout(pressTimer);
  });
  secretBtn.addEventListener("dblclick", () => {
    document.getElementById("secret-result").textContent = "Double click detected! 🧙‍♂️";
  });
  
  // 5. Toggle button color
  document.getElementById("toggle-btn").addEventListener("click", () => {
    const btn = document.getElementById("toggle-btn");
    btn.style.backgroundColor = btn.style.backgroundColor === "lightgreen" ? "" : "lightgreen";
    btn.textContent = btn.textContent === "Toggle Color" ? "Color Toggled!" : "Toggle Color";
  });
  
  // 6. Image Gallery
  let currentImageIndex = 0;
  const images = document.querySelectorAll(".gallery img");
  
  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.remove("active");
      if (i === index) img.classList.add("active");
    });
  }
  
  document.getElementById("next-btn").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  });
  
  // 7. Tabs
  function openTab(evt, tabId) {
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
    document.getElementById(tabId).classList.add("active");
  }
  
  // 8. Form Validation
  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    let feedback = "";
  
    if (name.length < 2) {
      feedback += "Name must be at least 2 characters.<br>";
    }
  
    if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
      feedback += "Please enter a valid email address.<br>";
    }
  
    if (password.length < 8) {
      feedback += "Password must be at least 8 characters.<br>";
    }
  
    document.getElementById("feedback").innerHTML = feedback;
  }
  
  document.getElementById("user-form").addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
    alert("Form submitted successfully!");
  });