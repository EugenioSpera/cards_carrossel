let index = 1;
showSlides(index);

function addSlides(n) {
showSlides(index += n)
}

//carrega o card atual que o usuario quer exibir
function currentSlide(n){
showSlides(index = n)
}

//irá exibir o acrd na tela
function showSlides(n){
    //seleciona os cards
    let slides = document.getElementsByClassName("slides");
    //seleciona os pontos que irão alterar o card atual na tela
    let dots = document.getElementsByClassName("dot");

    //se o numero do slide que o usuario tenatr exibir for maior que a quantidade de cards disponiveis ele irá automaticamente voltar para o primeiro slide.

    if (n > slides.length) {
        index = 1;
    }
    //se o numero de slide for menor que 0 ele volta automaticamente para o último slide

    if (n < 1) {
        index = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[index - 1].style.display = "flex";
    dots[index - 1].className += " active";
}
