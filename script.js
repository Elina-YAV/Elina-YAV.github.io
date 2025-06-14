function fetchContent(page) {
  fetch(`/pages/${page}.html`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    })
    .catch((error) => console.error(error));
}

document.addEventListener("DOMContentLoaded", () => {
  fetchContent("home");
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const page = item.getAttribute("data-page");
      fetchContent(page);
    });
  });
});
