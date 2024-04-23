
const menu = document.querySelector('.menu-itens');
const itensMenu = menu.querySelectorAll('.item');

itensMenu.forEach((item) => {
    item.addEventListener('click', () => {
        const buscarIdAlvoRolagem = item.getAttribute('data-target'); //busca pelo atributo
        const targetSection = document.getElementById(buscarIdAlvoRolagem);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    });
});

// Scroll Botão WhatsApp
var scrollToTopBtn = document.getElementById('scrollToTopBtn');

document.addEventListener('scroll', function (){
    window.addEventListener('scroll', function () {
        if (window.scrollY > window.innerHeight / 2){
            scrollToTopBtn.classList.add('visible');
        }
    });

    const numeroTelefone = '55110000000'
    const mensagem = encodeURIComponent('Olá! Gostei deste modelo de Landing Page e gostaria de adquirir e adaptar ao meu negócio.')

    scrollToTopBtn.addEventListener('click', function (){
        window.open(`https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${mensagem}`, '_blank');
    });
});

// Apresentação - clicar no "veja o cardapio"

const verCardapio = document.querySelector('#botao-cardapio');
const cardapioCompleto = document.querySelector('.cardapio');

verCardapio.addEventListener('click', () => {
    cardapioCompleto.scrollIntoView({behavior: 'smooth', block: 'start'})
});




