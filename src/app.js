window.onload = () => {
  const palabras = {
    articulo: ["El"],
    adjetivo: ["pequeño", "joven", "jugueton", "solitario"],
    sustantivo: ["perro"],
    objeto: ["casa", "cama", "mesa"],
    lugar: ["en mi cama", "en mi escritorio"]
  };

  const level = {
    facil: ["agarro"],
    medio: ["mordio"],
    dificil: ["comio"]
  };

  const colores = {
    facil: "green",
    medio: "blue",
    dificil: "red"
  };

  const generarFrase = () => {
    const nivelSeleccionado = document.getElementById("dificultad").value;

    const verbo = level[nivelSeleccionado][0];

    const frase = [
      palabras.articulo[0],
      palabras.adjetivo[Math.floor(Math.random() * palabras.adjetivo.length)],
      palabras.sustantivo[0],
      verbo,
      palabras.objeto[Math.floor(Math.random() * palabras.objeto.length)],
      palabras.lugar[Math.floor(Math.random() * palabras.lugar.length)]
    ].join(" ");

    const elementoFrase = document.getElementById("excuse");
    elementoFrase.textContent = frase;
    elementoFrase.style.color = colores[nivelSeleccionado];
  };

  const boton = document.createElement("button");
  boton.textContent = "Generar nueva frase";
  boton.addEventListener("click", generarFrase);
  document.body.appendChild(boton);

  const elementoFrase = document.createElement("div");
  elementoFrase.id = "excuse";
  document.body.appendChild(elementoFrase);
};
