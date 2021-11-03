$(function(){

    $('.livros').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: $("#seta-esq"),
        nextArrow: $("#seta-dir")

    });

    let esq = document.querySelector("#esquerda");
    
    esq.addEventListener("mouseover", function(){
       this.src="img/seta-azul-esquerda.png";       
    });

    esq.addEventListener("mouseout", function(){
        this.src="img/seta-esquerda.png";        
    });

    let dir = document.querySelector("#direita");
    
    dir.addEventListener("mouseover", function(){
       this.src="img/seta-azul-direita.png";       
    });

    dir.addEventListener("mouseout", function(){
        this.src="img/seta-direita.png";        
    });

})