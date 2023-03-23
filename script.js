var playerscore = 0
var cpuscore = 0

var you = ''
var cpu = ''

const menu = document.getElementById('menu')
const rules = document.getElementById('rules')
const winner = document.getElementById('winner')
const loser = document.getElementById('loser')
const game = document.getElementById('gameplay')



function rule() {
    menu.classList.add('none')
    rules.classList.remove('none')
}

function back() {
    rules.classList.add('none')
    menu.classList.remove('none')
}

function play(){
    menu.classList.add('none')
    gameplay.classList.remove('none')
}

function image() {
    you = document.querySelector('input[name="choices"]:checked').value        
    playermove.innerHTML = "<img src='images/" + you + ".png'>"
}

function jokenpo(){
    let option = ['rock', 'paper', 'scissors']
    let num = Math.floor(Math.random() * ( 2 - 0 + 1)) + 0
    cpu = option[num]
    cpumove.innerHTML = "<img src='images/" + cpu + ".png'>"
    analysis()
}

function analysis() {
    
    let win = 0

    document.getElementById('jokenpo').disabled = true
   
    if(you == cpu) {

    } else if(you == 'rock') {
        win = cpu == 'scissors' ? 2 : 1
    } else if(you == 'paper') {
        win = cpu == 'rock' ? 2 : 1
    } else if(you == 'scissors') {
        win = cpu == 'paper' ? 2 : 1
    }
    
    if(win == 0) {

    } else if(win == 2) {
        playerscore ++
    } else {
        cpuscore ++
    }

    pscore.innerHTML =  playerscore
    cscore.innerHTML = cpuscore

    

    if(playerscore >= 3) {
        clear()
        winner.classList.remove('none')
        gameplay.classList.add('none')
    }

    if (cpuscore >= 3) {
        clear()
        loser.classList.remove('none')
        gameplay.classList.add('none')
    }

    setTimeout(()=>{
        document.getElementById('jokenpo').disabled = false
        imgreset()
    },1000)
}

function imgreset(){
    playermove.innerHTML = ''
    cpumove.innerHTML = ''
}

function clear(){
    playerscore = 0
    cpuscore = 0
    pscore.innerHTML = '0'
    cscore.innerHTML = '0'
    playermove.innerHTML = ''
    cpumove.innerHTML = ''
}

function playagain() {
    winner.classList.add('none')
    loser.classList.add('none')
    gameplay.classList.remove('none')
}

function mainmenu() {
    winner.classList.add('none')
    loser.classList.add('none')
    menu.classList.remove('none')
}


