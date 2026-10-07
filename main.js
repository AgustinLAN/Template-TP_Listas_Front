//Cargar comidas en memoria desde el JSON
fetch("./data/comidas.json") // Ruta al archivo JSON
  .then((response) => response.json()) // Convertir la respuesta en JSON
  .then((data) => {
    // Aquí tienes acceso al JSON en formato de objeto JS
    console.log("Comidas cargadas desde JSON:");
    console.log(data);
    comidas = data; // Asignar el JSON a la variable comidas
    mostrarComidasConForEach();
  })
  .catch((error) => {
    // Manejo de errores al leer el archivo JSON
    console.error("Error al leer el archivo JSON:", error);
  });
const formComidaNueva = document.getElementById("agregarComida");
const comidaContainer = document.getElementById("comidaContainer");
let comidas = [];
/*Mostrar comidas viejo lul xd---
//                              |
//                              v
function mostrarComidas() {
  for (let i = 0; i <= 9; i++) {
    if (i === 0) {
      document.getElementById("comidaContainer").innerHTML += `
      <article class="comida1">
        <h2 class="comida">${comidas[0].nombre}</h2>
        <p>${comidas[0].categoria}</p>
        <p>${comidas[0].provincia}</p>
        <p>${comidas[0].ingredientes}</p>
      </article>
    `;
    }

    if (i === 1) {
      document.getElementById("comidaContainer").innerHTML += `
      <article class="comida1">
        <h2 class="comida">${comidas[1].nombre}</h2>
        <p>${comidas[1].categoria}</p>
        <p>${comidas[1].provincia}</p>
        <p>${comidas[1].ingredientes}</p>
      </article>
    `;
    }

    if (i === 2) {
      document.getElementById("comidaContainer").innerHTML += `
      <article class="comida1">
        <h2 class="comida">${comidas[2].nombre}</h2>
        <p>${comidas[2].categoria}</p>
        <p>${comidas[2].provincia}</p>
        <p>${comidas[2].ingredientes}</p>
      </article>
    `;
    }

    if (i === 3) {
      document.getElementById("comidaContainer").innerHTML += `
      <article class="comida1">
        <h2 class="comida">${comidas[3].nombre}</h2>
        <p>${comidas[3].categoria}</p>
        <p>${comidas[3].provincia}</p>
        <p>${comidas[3].ingredientes}</p>
      </article>
    `;
    }

    if (i === 4) {
      document.getElementById("comidaContainer").innerHTML += `
      <article class="comida1">
        <h2 class="comida">${comidas[4].nombre}</h2>
        <p>${comidas[4].categoria}</p>
        <p>${comidas[4].provincia}</p>
        <p>${comidas[4].ingredientes}</p>
      </article>
    `;
    }

    if (i === 5) {
      document.getElementById("comidaContainer").innerHTML += `
      <article class="comida1">
        <h2 class="comida">${comidas[5].nombre}</h2>
        <p>${comidas[5].categoria}</p>
        <p>${comidas[5].provincia}</p>
        <p>${comidas[5].ingredientes}</p>
      </article>
    `;
    }
    if (i === 6) {
      document.getElementById("comidaContainer").innerHTML += `
      <article class="comida1">
        <h2 class="comida">${comidas[6].nombre}</h2>
        <p>${comidas[6].categoria}</p>
        <p>${comidas[6].provincia}</p>
        <p>${comidas[6].ingredientes}</p>
      </article>
    `;
    }
    if (i === 7) {
      document.getElementById("comidaContainer").innerHTML += `
      <article class="comida1">
        <h2 class="comida">${comidas[7].nombre}</h2>
        <p>${comidas[7].categoria}</p>
        <p>${comidas[7].provincia}</p>
        <p>${comidas[7].ingredientes}</p>
      </article>
    `;
    }

    if (i === 8) {
      document.getElementById("comidaContainer").innerHTML += `
      <article class="comida1">
        <h2 class="comida">${comidas[8].nombre}</h2>
        <p>${comidas[8].categoria}</p>
        <p>${comidas[8].provincia}</p>
        <p>${comidas[8].ingredientes}</p>
      </article>
    `;
    }

    if (i === 9) {
      document.getElementById("comidaContainer").innerHTML += `
      <article class="comida1">
        <h2 class="comida">${comidas[9].nombre}</h2>
        <p>${comidas[9].categoria}</p>
        <p>${comidas[9].provincia}</p>
        <p>${comidas[9].ingredientes}</p>
      </article>
    `;
    }
  }
}*/
function mostrarComidasConForEach() {
  comidaContainer.innerHTML = "";
  comidas.forEach((comida) => {
    comidaContainer.innerHTML += `
      <article class="comida1">
        <h2 class="comida">${comida.nombre}</h2>
        <p class="categoria">${comida.categoria}</p>
        <p class="provincia">${comida.provincia}</p>
        <ul>
        ${comida.ingredientes
          .map((ingredientes) => `<li> ${ingredientes}</li>`)
          .join(``)}
                </ul>

      </article>
    `;
  });
}
mostrarComidasConForEach();
formComidaNueva.addEventListener("submit", (e) => {
  e.preventDefault();
  let nuevaComida = {
    nombre: e.target.nombre.value,
    categoria: e.target.categoria.value,
    provincia: e.target.provincia.value,
    ingredientes: e.target.ingredientes.value.split(","),
  };
  comidas.push(nuevaComida);
  mostrarComidasConForEach();
  formComidaNueva.reset();
});
