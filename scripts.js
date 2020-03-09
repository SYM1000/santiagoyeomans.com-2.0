//Funcion para seleccionar elementos
const selectElement = (s) => document.querySelector(s);

//Abrir el menu en un click
selectElement( s: '.open').addEventListener('click', () => {
  selectElement( s: '.nav-list').classList.add('active');

});

//Cerrar el menu en un click
selectElement(s: '.close').addEventListener('click', () => {
  selectElement(s: '.nav-list').classList.remove(tokens: 'active');

});
