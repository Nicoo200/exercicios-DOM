// vamos pegar o elemento button com id = btnSaudar
const botaoSaudar = document.getElementById('btnSaudar');

//vamos pegar o elemento com input com id = nomeInput
const inputNome = document.getElementById('nomeInput');

const saudacaoOutPut = document.getElementById('saudacaoOutput');

// vamos criar a funçao de seta  - arrow function para criar a saudacao
const criarSaudacao = (nome) => `Olá, ${nome}! Bem vindo(a)`;

// vamos manipular o evento para pegar o nome e enviar para funçao criarSaudacao
botaoSaudar.addEventListener('click', () => {
    const nome = inputNome.value;
    const saudacao = criarSaudacao(nome);

    saudacaoOutPut.textContent = saudacao;
});
