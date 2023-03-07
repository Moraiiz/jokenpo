const menu = document.getElementById('menu')
const rules = document.getElementById('rules')
const winner = document.getElementById('winner')
const loser = document.getElementById9('loser')
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
    var you = document.querySelector('input[name="choices"]:checked').value        
    playermove.innerHTML = "<img src='imagens/" + you + ".png'>"
    cpumove.innerHTML = ''


}
