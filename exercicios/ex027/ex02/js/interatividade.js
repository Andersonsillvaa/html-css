function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = window.document.getElementById('foto')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        img.style.width = '300px'
        img.style.height = '300px'
        img.style.borderRadius = '50%'
        img.style.backgroundSize = 'cover'

        //homens
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                //crinça
                img.setAttribute('src', 'img/foto-crianca-m.jpg')
            } else {
                if (idade < 21) {
                    // jovem
                    img.setAttribute('src', 'img/foto-jovem-m.jpg')
                } else {
                    if (idade <= 50) {
                        //adulto
                        img.setAttribute('src', 'img/foto-adulto-m.jpg')
                    } else {
                        //idoso
                        img.setAttribute('src', 'img/foto-idoso-m.jpg')
                    }
                }
            }

            // mulheres
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 12) {
                //criança
                img.setAttribute('src', 'img/foto-crianca-f.jpg')
            } else {
                if (idade < 21) {
                    //jovem
                    img.setAttribute('src', 'img/foto-jovem-f.jpg')
                } else {
                    if (idade <= 50) {
                        //adulta
                        img.setAttribute('src', 'img/foto-adulto-f.jpg')
                    } else {
                        //idosa
                        img.setAttribute('src', 'img/foto-idoso-f.jpg')
                    }
                }
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}