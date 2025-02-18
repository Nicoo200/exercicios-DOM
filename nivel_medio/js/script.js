const inputNovaTarefa = document.getElementById('novaTarefa');
const buttonAdicionar = document.getElementById('btnAdicionar');
const listaTarefas    = document.getElementById('listarTarefas');
 
buttonAdicionar.addEventListener('click', function() {
    const textoTarefa = inputNovaTarefa.value.trim();
 
    if (textoTarefa !== '') {
        adicionarTarefa(textoTarefa);
        inputNovaTarefa.value = '';
        inputNovaTarefa.focus();
    }
});
 
function adicionarTarefa(texto) {
    const itemLista = document.createElement('li');
 
    const spanTarefa = document.createElement('span');
    spanTarefa.textContent = texto;
    itemLista.appendChild(spanTarefa);
 
    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    itemLista.appendChild(btnRemover);
   
    spanTarefa.addEventListener('click', function() {
        itemLista.classList.toggle('completa');
    });
 
    btnRemover.addEventListener('click', function() {
        listaTarefas.removeChild(itemLista);
    });
 
    listaTarefas.appendChild(itemLista);
}
