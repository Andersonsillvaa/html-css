var corpo = document.body
function escuro() {
    var esc = document.getElementById('escuro')
    var inp = document.getElementById('nome')
    var inp2 = document.getElementById('sobre')
    corpo.style.background = 'grey'
    corpo.style.color = 'white'
    esc.style.background = 'red'
    inp.style.color = 'black'
    inp2.style.color = 'black'

}

function claro() {
    var claro = document.getElementById('escuro1')
    corpo.style.background = 'white'
    corpo.style.color = 'black'
}