const game_board = document.getElementsByClassName("game")
const start_btn = document.getElementById("start-button")
const generate = document.getElementById("generate")
const cant_candles = document.getElementById("cant_candles")
const bet_down = document.getElementById("down")
const bet_up = document.getElementById("up")
const points_p = document.getElementById('points_p')
const init_screen = document.getElementsByClassName('init-screen')
const music = document.getElementById("music")

music.addEventListener("ended", () => {
    music.currentTime = 0
    setTimeout(function() {
        music.play()
    }, 1000)
})
let points = 0
bet_down.addEventListener("click", () => generateMore(cant_candles.value, 0))
bet_up.addEventListener("click", () => generateMore(cant_candles.value, 1))
let last;
cant_candles.addEventListener('change', (event) => {
    console.log(event.target.value)
    cant_candles.value = event.target.value
})
start_btn.addEventListener("click", startGame)
//Imagenes velas
const alza1 = new Image()
alza1.src = './assets/alza1.png'
const alza2 = new Image()
alza2.src = './assets/alza2.png'
const baja1 = new Image()
baja1.src = './assets/baja1.png'
const baja2 = new Image()
baja2.src = './assets/baja2.png'
const images_urls = [
    {
        "img": './assets/alza1.png',
        "value": 1
    }, 
    {
        "img": './assets/alza2.png',
        "value": 1
    }, 
    {
        "img": './assets/baja1.png',
        "value": 0
    }, 
    {
        "img": './assets/baja2.png',
        "value": 0
    }
]
const images = [alza1, alza2, baja1, baja2]
console.log(images)
console.log(game_board)

function startGame() {
    console.log("empezar")
    game_board[0].appendChild(images[Math.floor(Math.random() * images.length)])
    game_board[0].appendChild(images[Math.floor(Math.random() * images.length)])
    game_board[0].appendChild(images[Math.floor(Math.random() * images.length)])
    game_board[0].appendChild(images[Math.floor(Math.random() * images.length)])
    init_screen[0].style.display = "none"
    music.play()
    music.volume = 0.5
}

function generateMore(cant, bet) {
    for (let i = 0; i < cant; i++) {
        let new_image = new Image()
        let image = images_urls[Math.floor(Math.random() * images.length)]
        let src = image.img
        new_image.src = src
        game_board[0].appendChild(new_image)
        last = image.value
    }

    if (last === bet) {
        points += parseInt(cant)
        points_p.innerText = `Puntos: ${points}`;
    } else {
        bet_down.disabled = true;
        bet_up.disabled = true;
    }
}
