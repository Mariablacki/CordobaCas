document.addEventListener('mousemove', function(e) {
  const perro = document.getElementById('perro');
  perro.style.left = (e.pageX - 50) + 'px'; 
  perro.style.top = (e.pageY - 50) + 'px';
});

window.onload = function(){
   if (!localStorage.getItem("bienvenidaMostrada")) {
alert("Bienvenido, gracias por su tiempo.💫");
      localStorage.setItem("bienvenidaMostrada", "true");
    }
};
