function fixLinks() {
    const base = "/marica-rj";  // subdiretório do GitHub Pages
    document.querySelectorAll('a[href^="/legislatura"]').forEach(link => {
        if (!link.dataset.fixed) {       // evita duplicar prefixo
            link.href = base + link.getAttribute('href');
            link.dataset.fixed = "true";
        }
    });
}

// Rodar no carregamento inicial
document.addEventListener("DOMContentLoaded", fixLinks);

// Rodar a cada navegação interna do Material SPA
if (window.MATERIAL) {
    document.addEventListener("navigation:load", fixLinks);
}
