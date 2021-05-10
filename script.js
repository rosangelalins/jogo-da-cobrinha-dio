let canvas = document.getElementById("snake"); //criar elemento que irá rodar o jogo
let context = canvas.getContext("2d"); //plano 2d
let box = 32; //tamanho total dos quadradinhos no jogo
let snake = []; //criar uma lista que será a cobrinha e que ela aumentará de tamanho 
//que quando pintadas, criam os quadradinhos

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

function criarBG() {
    //fillStyle trabalha o estilo do canvas
    context.fillStyle = "lightgreen"; //define a cor
    //fillRect desenha aonde vai acontecer o jogo,
    //o retângulo usando x e y e a largura e altura setadas
    context.fillRect(0, 0, 16 * box, 16 * box); //utiliza o tamanho do box que foi criado de 32px
}

function criarCobrinha() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

//aqui vamos passar todas as funções dentro da iniciar 
//para que sempre que iniciar o jogo elas carregarem
function iniciarJogo() {
    criarBG(); // aqui chama a função para mostrar o jogo
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //coordenadas da cobrinha, para aonde ela vai seguir
    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box; //diminui para ela entender que esta indo para esquerda
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    snake.pop(); //pop retira o último elemento da lista

    //adiciona nova cabeça no inicio
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead); //método unshift adiciona como primeiro quadradinho da cobrinha
}

// intervalo de 100 milisegundos para a iniciar jogo ser sempre inicializada
let jogo = setInterval(iniciarJogo, 100);