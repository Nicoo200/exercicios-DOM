// vamos pegar o elemneto h1 com o id = titulo
const texto = document.getElementById("titulo");

// vamos pegar o elemneto button com o id = botao
const elementoBotao = document.getElementById("botao");

// Manipulador de Eventos - JS
elementoBotao.addEventListener('click', function(){
    // vamos alterar o texto do elemento h1 para texto alterao
    texto.textContent = "Texto Alterado !"
});
