const menu = document.getElementById('menu')
const rules = document.getElementById('rules')
const winner = document.getElementById('winner')
const loser = document.getElementById9('loser')
const game = document.getElementById('gameplay')

var you = ''
var cpu = ''

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
    
    var playerscore = document.getElementById('pscore')
    var cpuscore = document.getElementById('cscore')
    playerscore = '0'
    cpuscore = '0'
    let win = '0'
    
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
        playerscore = ++1
    } else {
        cpuscore = ++1 
    }

    pscore.innerHTML =  playerscore
    cscore.innerHTML = cpuscore
    
}
