let imagens = document.querySelectorAll(".small-img"); //Pegar todas as imagens
let modal = document.querySelector('.modal'); //Pegar a estrutura do modal
let btn = document.querySelector('#btn-fechar'); // Pegar o botão
let modalSrc = document.querySelector('#modal-img'); // Pegar a imagem do modal para alterar o source.
let src =""; //Irá receber o source da imagem pequena e irá transferir para o modal


imagens.forEach(function (elemento){ // forEach irá varrer todas as imagens e pra cada uma irá retornar uma função ao clicar.
    elemento.addEventListener('click', function(){
        src = elemento.getAttribute('src'); //Irá pegar o atributo source da imagem pequena
        modalSrc.setAttribute('src', src); // Irá trocar o source do modal para o source da imagem pequena
        modal.classList.toggle('modal-open'); // Adicionar a classe modal-open ao clicar, para abrir o modal       
    });
});

btn.addEventListener('click', function(){
    modal.classList.toggle('modal-open'); // Tirar a classe modal-open ao clicar, para fechar o modal
});

