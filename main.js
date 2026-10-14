

//Cargar comidas en memoria desde el JSON
fetch("./data/comidas-extended.json") // Ruta al archivo JSON
  .then((response) => response.json()) // Convertir la respuesta en JSON
  .then((data) => {
    // Aquí tienes acceso al JSON en formato de objeto JS
    console.log("Comidas cargadas desde JSON:");
    console.log(data);
    comidas = data; // Asignar el JSON a la variable comidas
    mostrarComidas(comidas);
  })
  .catch((error) => {
    // Manejo de errores al leer el archivo JSON
    console.error("Error al leer el archivo JSON:", error);
  });

  const formComidaNueva = document.getElementById("agregarComida");
  const comidaContainer = document.getElementById("comidaContainer");
  const filtrarcategoria = document.getElementById("filtroCategoria");
  const filtrarprovincia = document.getElementById("filtroProvincia");
  const buscador = document.getElementById("buscador");
  
  let comidas = [];

function mostrarComidas(lista) {
  comidaContainer.innerHTML = "";
  lista.forEach((comida) => {
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

formComidaNueva.addEventListener("submit", (e) => {
  e.preventDefault();
  let nuevaComida = {
    nombre: e.target.nombre.value,
    categoria: e.target.categoria.value,
    provincia: e.target.provincia.value,
    ingredientes: e.target.ingredientes.value.split(","),
  };
  comidas.push(nuevaComida);
  mostrarComidas(comidas);
  formComidaNueva.reset();
});

function filtrar() {
  const comidasFiltradas = comidas.filter((comida) => {
    return (
      comida.categoria.includes(filtrarcategoria.value) &&
      comida.provincia.includes(filtrarprovincia.value)
    );
  });
  mostrarComidas(comidasFiltradas);
}

function buscar() {
  const texto = buscador.value.toLowerCase();
  const comidasFiltradas = comidas.filter((comida) => {
    return (
      comida.nombre.toLowerCase().includes(texto) ||
      comida.provincia.toLowerCase().includes(texto) ||
      comida.categoria.toLowerCase().includes(texto)
    );
  });
  mostrarComidas(comidasFiltradas);
}

filtrarprovincia.addEventListener("change", filtrar);
filtrarcategoria.addEventListener("change", filtrar);
buscador.addEventListener("input", buscar);