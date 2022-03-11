// Aqui definimos um array vazio para as imagens.
const urlImages = [];

// Aqui definimos uma variável para pegar todas as imagens com o querySelectorAll.
const images = document.querySelectorAll("img");

// Aqui definimos uma variável para pegar todos os links <a> com o querySelectorAll.
const link = document.querySelectorAll(".link");

// Aqui percorremos cada imagem com o forEach.
images.forEach((_, index) => {

// Aqui criamos a variavel url e iniciamos um prompt para inserir os links de todas as imagens.
    const url = prompt(`Adicione o URL para a imagem ${index + 1}`);

// Aqui adicionamos a nossa url dentro do nosso array vazio criado mais cedo, usando o push que coloca o conteúdo no final.
    urlImages.push(url);
});

// Aqui percorremos o array com as url's
urlImages.forEach((url, index) => {

// atribuimos os atributos src para a <img> e inserimos a url
    images[index].setAttribute("src", url);

// o href para o <a> e inserimos a url
    link[index].setAttribute("href", url);

// e por ultimo o atributo target com o valor _blank.
    link[index].setAttribute("target", "_blank");
});

/* ETAPA 3
   - Nó pai:<div class="conteudo">

   - Nó filho repetitivo:<div class="card">

   - Explicação: não sei o que escrever aqui, fiz no código acima kk.

*/

