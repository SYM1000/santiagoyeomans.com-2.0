//Funcion para seleccionar elementos
const selectElement = (s) => document.querySelector(s);

//Abrir el menu en un clic
selectElement('.open').addEventListener('click', () => {
  selectElement('.nav-list').classList.add('active');
});

//Cerrar el menu en un click
selectElement('.close').addEventListener('click', () => {
  selectElement('.nav-list').classList.remove('active');
});
