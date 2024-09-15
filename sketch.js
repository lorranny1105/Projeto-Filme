let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("blue");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(780, 20, 57));
  textAlign(CENTER, CENTER);
  textSize(50);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 8) {
    if (idade >= 14) {
      return "A Cápsula do Tempo";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homem aranha: no aranhaverso";          
        } else{
         return "O Poderoso Chefinho";
        }
      } else {
        if (gostaDeFantasia) {
          return "Divertidamente 2";
        } else {
          return "Viva - A vida é uma festa ";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Encanto";
    } else {
      return "zootopia 2";
    }
  }
}
