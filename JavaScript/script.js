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



