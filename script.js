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

function playermove() {
    let move1 = document.getElementById('rock')
    let move2 = document.getElementById('paper')
    let move3 = document.getElementById('scissors')
    let choie = document.getElementById('move1')
    let choice = document.createAttribute('img')

    if (move1 == checked) {
        img.setAtribute('src', 'imagens/rock.png')
    }

}
