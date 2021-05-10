let canvas = document.getElementById("snake"); //criar elemento que irá rodar o jogo
let context = canvas.getContext("2d"); //plano 2d
let box = 32; //tamanho total dos quadradinhos no jogo
let snake = []; //criar uma lista que será a cobrinha e que ela aumentará de tamanho 
                //que quando pintadas, criam os quadradinhos
                
snake[0] ={
x: 8 * box,
 y: 8 * box
 }          

function criarBG(){
    //fillStyle trabalha o estilo do canvas
    context.fillStyle = "lightgreen"; //define a cor
    //fillRect desenha aonde vai acontecer o jogo,
    //o retângulo usando x e y e a largura e altura setadas
    context.fillRect(0, 0, 16*box, 16*box); //utiliza o tamanho do box que foi criado de 32px
}

function criarCobrinha(){
for (i  = 0; i < snake.length; i++) {
    context.fillStyle ="green";
    context.fillRect(snake[i].x, snake[i].y, box, box);
    
}
}

criarBG(); // aqui chama a função para mostrar o jogo
criarCobrinha();