function fetchContent(page) {
  fetch(`/pages/${page}.html`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    })
    .catch((error) => console.error("Error loading content:", error));
}

document.addEventListener("DOMContentLoaded", () => {
  // Load home page by default
  fetchContent("home");

  // Set up click listeners
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const page = item.getAttribute("data-page");
      fetchContent(page);
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
    // Load home page by default
    fetchContent("home");

    // Set up click listeners for navigation
    document.querySelectorAll(".nav-item").forEach((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            const page = item.getAttribute("data-page");
            fetchContent(page);
        });
    });

    // Sidebar toggle functionality
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("open"); // Toggle 'open' class
    });
});
