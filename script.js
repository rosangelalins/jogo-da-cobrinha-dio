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
let food = {
    //criação das comidinhas que vão aparecer aleatoriamente com o Math.random 
    //que retorna a um numero aleatório +1
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG() {
    //fillStyle trabalha o estilo do canvas
    context.fillStyle = "#74c69d"; //define a cor
    //fillRect desenha aonde vai acontecer o jogo,
    //o retângulo usando x e y e a largura e altura setadas
    context.fillRect(0, 0, 16 * box, 16 * box); //utiliza o tamanho do box que foi criado de 32px
}

function criarCobrinha() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "#2763DB"; //cor da cobrinha
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood() {

    context.fillStyle = "red"; //cor da comida
    context.fillRect(food.x, food.y, box, box);
}

//quando um evento acontece, detecta e chama uma função
document.addEventListener('keydown', update);

function update(event) {
    if (event.keyCode == 37 && direction != 'right') direction = 'left';
    if (event.keyCode == 38 && direction != 'down') direction = 'up';
    if (event.keyCode == 39 && direction != 'left') direction = 'right';
    if (event.keyCode == 40 && direction != 'up') direction = 'down';
}


//aqui vamos passar todas as funções dentro da iniciar 
//para que sempre que iniciar o jogo elas carregarem
function iniciarJogo() {

    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;

    //quando a cobrinha se choca e da game over
    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo); //para a função jogo e alerta que o jogo acabou
            alert('Game Over :(');
        }
    }

    criarBG(); // aqui chama a função para mostrar o jogo
    criarCobrinha();
    drawFood();//chama função da comidinha



    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //coordenadas da cobrinha, para aonde ela vai seguir
    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box; //diminui para ela entender que esta indo para esquerda
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    //caso a posição da snake x seja diferente da food x e 
    // a nossa posição da snake y seja diferente da comida y, 
    //ela vai retirar o ultimo elemento  da nossa cobrinha.
    //caso não ela vai continuar aumentando e vai passar a função de girar aleatorio a comidinha
    //para quando passar por cima a comidinha aparecer em outro lugar aleatoriamente

    if (snakeX != food.x || snakeY != food.y) {
        snake.pop(); //pop tira o último elemento da lista
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    //adiciona nova cabeça no inicio
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead); //método unshift adiciona como primeiro quadradinho da cobrinha
}

// intervalo de 100 milisegundos para a iniciar jogo ser sempre inicializada
let jogo = setInterval(iniciarJogo, 100);