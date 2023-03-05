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

function movement() {
    let move1 = document.getElementById('rock')
    let move2 = document.getElementById('paper')
    let move3 = document.getElementById('scissors')
    let choice = ''

    if (move1 = checked) {
        document.getElementById('move1').innerHTML = "<img src='imagens/black-rock.png>"
    }

}
