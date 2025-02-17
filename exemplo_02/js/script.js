// vamos pegar a lista de produtos com id = lista
const elementoLista = document.getElementById('lista');

// vamos pegar o elemento input com id = novoItem
const novoItemInput = document.getElementById('novoItem');

// vamos pegar o elemento button com id = botaoAdicionar
const botaoAdicionar = document.getElementById('botaoAdicionar');

// vamos adicionar um ouvinte de evento do clique do button
botaoAdicionar.addEventListener('click', function(){
    // vamos ler o texto do produto digitado
    const novoItemTexto = novoItemInput.value;

    // vamos verificar se o texto do novo produto esta em branco
    if(novoItemTexto !== ""){
        // criar um novo elemnto li
        const novoItemElemento = document.createElement('li')

        // vamos adicionar o texto do novo elemnto 
        novoItemElemento.textContent = novoItemTexto;

        // vamos inserir dentro de elemento ul o elemento li criado
        elementoLista.appendChild(novoItemElemento);

        // vamos limpar a caixa de texto
        novoItemInput.value = ''; // '' String nula
    }
});
