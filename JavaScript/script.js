function validar(){
    if (document.getElementById('nome').value==''){
        alert('O campo nome nao pode ficar vazio')
        document.getElementById('nome').focus()
        return false
    }
    if (document.getElementById('email').value==''){
        alert('O campo E-mail não pode ficar vazio')
        document.getElementById('email').focus()
        return false
    }
    else{
        alert('Obrigado por se cadastrar')
    }
}

const clicou = document.getElementById('clicou')
const drop = document.getElementById('drop')

drop.style.display = 'none'

clicou.addEventListener('click', (event) =>{
    if (drop.style.display == 'none'){
        drop.style.display = 'block'
    } else {
        drop.style.display = 'none'
    }
})


function verde(){
    let verde1 = document.getElementById('verde')
    document.querySelector('ul').setAttribute('class','fundoverde')
    document.querySelector('ul ul').setAttribute('class', 'fundoverde')
    
}

function vermelho(){
    let vermelho1 = document.getElementById('vermelho')
    document.querySelector('ul').setAttribute('class', 'fundovermelho')
    document.querySelector('ul ul').setAttribute('class', 'fundovermelho')

}

function rosa(){
    let rosa1 = document.getElementById('rosa')
    document.querySelector('ul').setAttribute('class','fundorosa')
    document.querySelector('ul ul').setAttribute('class','fundorosa')
}

function cinza(){
    let cinza1 = document.getElementById('cinza')
    document.querySelector('ul').setAttribute('class','fundocinza')
    document.querySelector('ul ul').setAttribute('class','fundocinza')
}

function reset(){
    let reset1 = document.getElementById('reset')
    document.querySelector('ul').removeAttribute('class')
    document.querySelector('ul ul').removeAttribute('class')
}

function rakan(){
    let rakan = document.getElementById('rakan')
    document.querySelector('body').setAttribute('class','rakan')
}

function zed(){
    let zed = document.getElementById('zed')
    document.querySelector('body').setAttribute('class','zed')
}

function temo(){
    let temo = document.getElementById('temo')
    document.querySelector('body').setAttribute('class','temo')
}

function ahri(){
    let ahri = document.getElementById('ahri')
    document.querySelector('body').setAttribute('class','ahri')
}

function remove(){
    let remove = document.getElementById('remove')
    document.querySelector('body').removeAttribute('class')
}