$(function() {

    $("#enviar").click(function() {

        let usuario = $("#iusuario").val();
        let senha = $("#isenha").val();
        
        let Usuario={};

        Usuario.usuario = usuario;
        Usuario.senha = senha;       
       
        if ((Usuario.usuario.length && senha.length )> 0){ 
           
            alert("Olá, "+Usuario.usuario);
            window.location.href= "index.html";
        }
        else{   
            alert("Confira seus dados e clique em enviar");
        }

    });
    


})