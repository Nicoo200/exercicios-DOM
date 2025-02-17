const botao = document.getElementById('alternarBotao');

const msg = document.getElementById('mensagem');

botao.addEventListener('click', function(){
    // 1. vamos verificar se a mensagem esta oculta 
    if(msg.classList.contains('oculto')){
        //vamos remover o estilo oculto
        msg.classList.remove('oculto');
    }else{
        msg.classList.add('oculto');
    }
});