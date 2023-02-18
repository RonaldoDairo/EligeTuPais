let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
// Obtén una referencia al elemento select con id "mySelect"
const select = document.querySelector("#mySelect");

// Agrega opciones al elemento select usando el método appendChild
for (let i = 0; i < countries.length; i++) {
  const option = document.createElement("option");
  option.value = countries[i];
  option.text = countries[i];
  select.appendChild(option);
}

// Agrega un listener al evento 'change' para mostrar una alerta con el país seleccionado
select.addEventListener("change", function() {
  const selectedCountry = select.value;
  alert("Has seleccionado " + selectedCountry);
});
