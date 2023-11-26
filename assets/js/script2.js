const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const div4 = document.querySelector("#div4");
const divEspecial = document.querySelector("#key");
const estilo1 = (color1 = "blue") => {
  div1.style.height = "200px";
  div1.style.width = "200px";
  div1.style.padding = "20px";
  div1.style.margin = "20px";
  div1.style.backgroundColor = color1;
  div1.style.border = "3px solid black";
};
const estilo2 = (color2 = "red") => {
  div2.style.height = "200px";
  div2.style.width = "200px";
  div2.style.padding = "20px";
  div2.style.margin = "20px";
  div2.style.backgroundColor = color2;
  div2.style.border = "3px solid black";
};
const estilo3 = (color3 = "green") => {
  div3.style.height = "200px";
  div3.style.width = "200px";
  div3.style.padding = "20px";
  div3.style.margin = "20px";
  div3.style.backgroundColor = color3;
  div3.style.border = "3px solid black";
};
const estilo4 = (color4 = "yellow") => {
  div4.style.height = "200px";
  div4.style.width = "200px";
  div4.style.padding = "20px";
  div4.style.margin = "20px";
  div4.style.backgroundColor = color4;
  div4.style.border = "3px solid black";
};
const estilo5 = (color5 = "white") => {
  divEspecial.style.height = "200px";
  divEspecial.style.width = "200px";
  divEspecial.style.padding = "20px";
  divEspecial.style.margin = "20px";
  divEspecial.style.backgroundColor = color5;
  divEspecial.style.border = "3px solid black";
};
const crearDiv = (color6) => {
  const div6 = document.createElement("div");
  div6.style.height = "200px";
  div6.style.width = "200px";
  div6.style.padding = "20px";
  div6.style.margin = "20px";
  div6.style.backgroundColor = color6;
  div6.style.border = "3px solid black";
  document.body.appendChild(div6)
};
estilo1();
estilo2();
estilo3();
estilo4();
estilo5();
div1.addEventListener("click", () => {
  estilo1("black");
});
div2.addEventListener("click", () => {
  estilo2("black");
});
div3.addEventListener("click", () => {
  estilo3("black");
});
div4.addEventListener("click", () => {
  estilo4("black");
});
document.addEventListener("keydown", (elemento) => {
  if (elemento.key === "a" || elemento.key === "A") {
    estilo5("pink");
  } else if (elemento.key === "s" || elemento.key === "S") {
    estilo5("orange");
  } else if (elemento.key === "d" || elemento.key === "D") {
    estilo5("skyblue");
  }else if(elemento.key === "q" || elemento.key === "Q"){
    crearDiv("purple")
  }else if(elemento.key === "w" || elemento.key === "W"){
    crearDiv("grey")
  }else if(elemento.key === "e" || elemento.key === "E"){
    crearDiv("saddlebrown")
  }
});
