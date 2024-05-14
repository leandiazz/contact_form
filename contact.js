const form = document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(Object.fromEntries(new FormData(e.target)));
});
