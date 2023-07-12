function validação() {
    let inp = document.getElementById('text')
    let res = document.getElementById('res') 
    if (inp.value.length == 0) {
        res.style.textAlign = 'center'
        res.style.color = 'red'
        res.style.fontWeight = 'bold'
     res.innerHTML = 'Os campos não podem ficar vazio'   
    }
}
