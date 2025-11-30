document.addEventListener("DOMContentLoaded", function() {
  const base = "/marica-rj"; // subdiretório do GitHub Pages
  document.querySelectorAll('a[href^="/legislatura"]').forEach(link => {
    link.href = base + link.getAttribute('href');
  });
});