document.addEventListener("DOMContentLoaded", () => {
  const darkModeStorage = localStorage.getItem("dark-mode");
  const html = document.querySelector("html");
  const inputDarkMode = document.getElementById("input-dark-mode");

  if (darkModeStorage) {
    html.setAttribute("dark", "true");
  }

  inputDarkMode.addEventListener("change", () => {
    if (inputDarkMode.checked) {
      html.setAttribute("dark", "true");
      localStorage.setItem("dark-mode", true);
    } else {
      html.removeAttribute("dark");
      localStorage.removeItem("dark-mode");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const fontSizeStorage = localStorage.getItem("mode");
  const body = document.querySelector("body");
  const fontSize = document.getElementById("font-size");

  if (fontSizeStorage) {
    body.setAttribute("size-mode", "true");
  }

  fontSize.addEventListener("change", () => {
    if (fontSize.checked) {
      body.setAttribute("size-mode", "true");
      localStorage.setItem("mode", true);
    } else{
      body.removeAttribute("size-mode");
      localStorage.removeItem("mode");
    }
  })
})