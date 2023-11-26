const elemento = document.querySelector("#ele1");
const pintar = (color = "green") => {
  elemento.style.backgroundColor = color;
};
pintar();
elemento.addEventListener("click", () => {
  pintar("yellow");
});
