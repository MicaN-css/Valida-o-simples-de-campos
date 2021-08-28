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
        return true
    }
}