/*
    Cargar comidas en memoria desde el JSON
*/
fetch("./data/comidas.json") // Ruta al archivo JSON
  .then((response) => response.json()) // Convertir la respuesta en JSON
  .then((data) => {
    // Aquí tienes acceso al JSON en formato de objeto JS
    console.log("Comidas cargadas desde JSON:");
    console.log(data);
    comidas = data; // Asignar el JSON a la variable comidas
  })
  .catch((error) => {
    // Manejo de errores al leer el archivo JSON
    console.error("Error al leer el archivo JSON:", error);
  });

let comidas = [
  {
    nombre: "Asado",
    categoria: "Parrilla",
    provincia: "Buenos Aires",
    ingredientes: ["Carne vacuna", "Sal", "Chimichurri"],
  },
  {
    nombre: "Empanadas",
    categoria: "Horno",
    provincia: "Tucumán",
    ingredientes: ["Carne", "Cebolla", "Aceitunas", "Huevo"],
  },
  {
    nombre: "Locro",
    categoria: "Guiso",
    provincia: "Salta",
    ingredientes: ["Maíz", "Porotos", "Chorizo", "Panceta", "Zapallo"],
  },
  {
    nombre: "Milanesa",
    categoria: "Frito",
    provincia: "Buenos Aires",
    ingredientes: ["Carne", "Huevo", "Pan rallado", "Aceite"],
  },
  {
    nombre: "Humita en Chala",
    categoria: "Horno",
    provincia: "Jujuy",
    ingredientes: ["Maíz", "Queso", "Cebolla", "Ají molido"],
  },
  {
    nombre: "Choripán",
    categoria: "Parrilla",
    provincia: "Córdoba",
    ingredientes: ["Chorizo", "Pan", "Chimichurri"],
  },
  {
    nombre: "Provoleta",
    categoria: "Parrilla",
    provincia: "Buenos Aires",
    ingredientes: ["Queso provolone", "Orégano", "Aceite de oliva"],
  },
  {
    nombre: "Milanesas a la napolitana",
    categoria: "Frito",
    provincia: "Santa Fe",
    ingredientes: ["Carne", "Tomate", "Queso", "Jamón", "Orégano"],
  },
  {
    nombre: "Matambre a la pizza",
    categoria: "Parrilla",
    provincia: "Buenos Aires",
    ingredientes: ["Matambre", "Queso", "Tomate", "Orégano"],
  },
  {
    nombre: "Torta Frita",
    categoria: "Frito",
    provincia: "Entre Ríos",
    ingredientes: ["Harina", "Agua", "Sal", "Grasa"],
  },
  {
    nombre: "Tamales",
    categoria: "Horno",
    provincia: "Salta",
    ingredientes: ["Maíz", "Carne", "Cebolla", "Ají"],
  },
  {
    nombre: "Cazuela de cordero",
    categoria: "Guiso",
    provincia: "Patagonia",
    ingredientes: ["Cordero", "Papas", "Zanahorias", "Vino blanco"],
  },
  {
    nombre: "Revuelto Gramajo",
    categoria: "Salteado",
    provincia: "Buenos Aires",
    ingredientes: ["Papas fritas", "Huevos", "Jamón"],
  },
  {
    nombre: "Milanesas de pollo",
    categoria: "Frito",
    provincia: "Córdoba",
    ingredientes: ["Pollo", "Pan rallado", "Huevo", "Ajo"],
  },
  {
    nombre: "Arroz con leche",
    categoria: "Postre",
    provincia: "Corrientes",
    ingredientes: ["Arroz", "Leche", "Azúcar", "Canela"],
  },
  {
    nombre: "Puchero",
    categoria: "Guiso",
    provincia: "Entre Ríos",
    ingredientes: ["Carne", "Papas", "Batata", "Chorizo"],
  },
  {
    nombre: "Sopa paraguaya",
    categoria: "Horno",
    provincia: "Formosa",
    ingredientes: ["Harina de maíz", "Queso", "Cebolla", "Huevo"],
  },
  {
    nombre: "Pollo al disco",
    categoria: "Parrilla",
    provincia: "La Pampa",
    ingredientes: ["Pollo", "Cebolla", "Morrón", "Vino blanco"],
  },
  {
    nombre: "Ensalada rusa",
    categoria: "Ensalada",
    provincia: "Buenos Aires",
    ingredientes: ["Papa", "Zanahoria", "Arvejas", "Mayonesa"],
  },
  {
    nombre: "Chivito a la estaca",
    categoria: "Parrilla",
    provincia: "Mendoza",
    ingredientes: ["Chivito", "Sal", "Ajo", "Romero"],
  },
  {
    nombre: "Arrollado de pollo",
    categoria: "Horno",
    provincia: "Santa Fe",
    ingredientes: ["Pollo", "Jamón", "Queso", "Zanahoria"],
  },
  {
    nombre: "Guiso de lentejas",
    categoria: "Guiso",
    provincia: "Buenos Aires",
    ingredientes: ["Lentejas", "Chorizo", "Panceta", "Papas"],
  },
  {
    nombre: "Ñoquis",
    categoria: "Pasta",
    provincia: "Buenos Aires",
    ingredientes: ["Papa", "Harina", "Queso", "Salsa"],
  },
  {
    nombre: "Polenta con tuco",
    categoria: "Guiso",
    provincia: "Buenos Aires",
    ingredientes: ["Polenta", "Carne", "Tomate", "Queso"],
  },
  {
    nombre: "Canelones",
    categoria: "Pasta",
    provincia: "Buenos Aires",
    ingredientes: ["Harina", "Espinaca", "Ricota", "Salsa de tomate"],
  },
  {
    nombre: "Bondiola a la cerveza",
    categoria: "Parrilla",
    provincia: "Buenos Aires",
    ingredientes: ["Bondiola", "Cerveza", "Ajo", "Orégano"],
  },
  {
    nombre: "Sorrentinos",
    categoria: "Pasta",
    provincia: "Buenos Aires",
    ingredientes: ["Harina", "Queso", "Jamón", "Ricota"],
  },
  {
    nombre: "Pizza de muzzarella",
    categoria: "Horno",
    provincia: "Buenos Aires",
    ingredientes: ["Harina", "Levadura", "Queso", "Salsa de tomate"],
  },
  {
    nombre: "Faina",
    categoria: "Horno",
    provincia: "Buenos Aires",
    ingredientes: ["Harina de garbanzo", "Agua", "Sal", "Aceite"],
  },
  {
    nombre: "Ravioles",
    categoria: "Pasta",
    provincia: "Buenos Aires",
    ingredientes: ["Harina", "Carne", "Ricota", "Salsa de tomate"],
  },
  {
    nombre: "Flan casero",
    categoria: "Postre",
    provincia: "Buenos Aires",
    ingredientes: ["Leche", "Huevos", "Azúcar", "Vainilla"],
  },
  {
    nombre: "Helado artesanal",
    categoria: "Postre",
    provincia: "Buenos Aires",
    ingredientes: ["Leche", "Azúcar", "Frutas", "Crema"],
  },
  {
    nombre: "Pastel de papa",
    categoria: "Horno",
    provincia: "Buenos Aires",
    ingredientes: ["Papa", "Carne", "Cebolla", "Queso"],
  },
  {
    nombre: "Tarta de jamón y queso",
    categoria: "Horno",
    provincia: "Buenos Aires",
    ingredientes: ["Harina", "Jamón", "Queso", "Huevo"],
  },
  {
    nombre: "Panqueques con dulce de leche",
    categoria: "Postre",
    provincia: "Buenos Aires",
    ingredientes: ["Harina", "Huevo", "Leche", "Dulce de leche"],
  },
  {
    nombre: "Tarta de ricota",
    categoria: "Postre",
    provincia: "Buenos Aires",
    ingredientes: ["Ricota", "Azúcar", "Harina", "Huevos"],
  },
  {
    nombre: "Milhojas de dulce de leche",
    categoria: "Postre",
    provincia: "Buenos Aires",
    ingredientes: ["Masa hojaldrada", "Dulce de leche", "Azúcar glas"],
  },
  {
    nombre: "Bizcochuelo",
    categoria: "Postre",
    provincia: "Buenos Aires",
    ingredientes: ["Harina", "Azúcar", "Huevos", "Esencia de vainilla"],
  },
  {
    nombre: "Facturas",
    categoria: "Panadería",
    provincia: "Buenos Aires",
    ingredientes: ["Harina", "Levadura", "Manteca", "Azúcar"],
  },
  {
    nombre: "Tortas fritas",
    categoria: "Frito",
    provincia: "Entre Ríos",
    ingredientes: ["Harina", "Grasa", "Sal", "Agua"],
  },
  {
    nombre: "Merluza a la romana",
    categoria: "Frito",
    provincia: "Buenos Aires",
    ingredientes: ["Merluza", "Harina", "Huevo", "Aceite"],
  },
  {
    nombre: "Pizza de fugazzeta",
    categoria: "Horno",
    provincia: "Buenos Aires",
    ingredientes: ["Harina", "Levadura", "Cebolla", "Queso"],
  },
  {
    nombre: "Morcilla",
    categoria: "Parrilla",
    provincia: "Buenos Aires",
    ingredientes: ["Sangre", "Cebolla", "Grasa", "Sal"],
  },
  {
    nombre: "Salchicha parrillera",
    categoria: "Parrilla",
    provincia: "Buenos Aires",
    ingredientes: ["Carne de cerdo", "Sal", "Ajo", "Orégano"],
  },
  {
    nombre: "Ojo de bife",
    categoria: "Parrilla",
    provincia: "Buenos Aires",
    ingredientes: ["Bife de costilla", "Sal", "Pimienta", "Chimichurri"],
  },
  {
    nombre: "Matambre tiernizado",
    categoria: "Parrilla",
    provincia: "Buenos Aires",
    ingredientes: ["Matambre", "Leche", "Ajo", "Pimienta"],
  },
];

for (let i = 0; i <= 9; i++) {
  const container = (document.getElementById(
    "comidaContainer"
  ).innerHTML += ``);

  if (i === 0) {
    document.getElementById("comidaContainer").innerHTML += `
      <article class="comida1">
        <h2 class="comida">${comidas[0].categoria}</h2>
        <p>${comidas[0].categoria}</p>
        <p>${comidas[0].provincia}</p>
        <p>${comidas[0].ingredientes}</p>
      </article>
    `;
  }

  if (i === 1) {
    document.getElementById("comidaContainer").innerHTML += `
      <article class="comida1">
        <h2 class="comida">${comidas[1].categoria}</h2>
        <p>${comidas[1].categoria}</p>
        <p>${comidas[1].provincia}</p>
        <p>${comidas[1].ingredientes}</p>
      </article>
    `;
  }

  if (i === 2) {
    document.getElementById("comidaContainer").innerHTML += `
      <article class="comida1">
        <h2 class="comida">${comidas[2].categoria}</h2>
        <p>${comidas[2].categoria}</p>
        <p>${comidas[2].provincia}</p>
        <p>${comidas[2].ingredientes}</p>
      </article>
    `;
  }

  if (i === 3) {
    document.getElementById("comidaContainer").innerHTML += `
      <article class="comida1">
        <h2 class="comida">${comidas[3].categoria}</h2>
        <p>${comidas[3].categoria}</p>
        <p>${comidas[3].provincia}</p>
        <p>${comidas[3].ingredientes}</p>
      </article>
    `;
  }

  if (i === 4) {
    document.getElementById("comidaContainer").innerHTML += `
      <article class="comida1">
        <h2 class="comida">${comidas[4].categoria}</h2>
        <p>${comidas[4].categoria}</p>
        <p>${comidas[4].provincia}</p>
        <p>${comidas[4].ingredientes}</p>
      </article>
    `;
  }

  if (i === 5) {
    document.getElementById("comidaContainer").innerHTML += `
      <article class="comida1">
        <h2 class="comida">${comidas[5].categoria}</h2>
        <p>${comidas[5].categoria}</p>
        <p>${comidas[5].provincia}</p>
        <p>${comidas[5].ingredientes}</p>
      </article>
    `;
  }
  if (i === 6) {
    document.getElementById("comidaContainer").innerHTML += `
      <article class="comida1">
        <h2 class="comida">${comidas[6].categoria}</h2>
        <p>${comidas[6].categoria}</p>
        <p>${comidas[6].provincia}</p>
        <p>${comidas[6].ingredientes}</p>
      </article>
    `;
  }
  if (i === 7) {
    document.getElementById("comidaContainer").innerHTML += `
      <article class="comida1">
        <h2 class="comida">${comidas[7].categoria}</h2>
        <p>${comidas[7].categoria}</p>
        <p>${comidas[7].provincia}</p>
        <p>${comidas[7].ingredientes}</p>
      </article>
    `;
  }

  if (i === 8) {
    document.getElementById("comidaContainer").innerHTML += `
      <article class="comida1">
        <h2 class="comida">${comidas[8].categoria}</h2>
        <p>${comidas[8].categoria}</p>
        <p>${comidas[8].provincia}</p>
        <p>${comidas[8].ingredientes}</p>
      </article>
    `;
  }

  if (i === 9) {
    document.getElementById("comidaContainer").innerHTML += `
      <article class="comida1">
        <h2 class="comida">${comidas[9].categoria}</h2>
        <p>${comidas[9].categoria}</p>
        <p>${comidas[9].provincia}</p>
        <p>${comidas[9].ingredientes}</p>
      </article>
    `;
  }
}
