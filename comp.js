document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("buscador");

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const valor = this.value.toLowerCase();
      const cuadros = document.querySelectorAll(".cuadro");

      cuadros.forEach(cuadro => {
        const tema = cuadro.dataset.theme;
        if (tema && tema.toLowerCase().includes(valor)) {
          cuadro.style.display = "block";
        } else {
          cuadro.style.display = "none";
        }
      });
    }
  });
});

