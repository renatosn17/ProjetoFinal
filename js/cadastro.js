$(function() {

    $("#enviar").click(function(){

        let nome= $("#inome").val();
        let email = $("#iemail").val();
        let usuario = $("#iusuario").val();
        let senha = $("#isenha").val();
        let telefone = $("#itelefone").val();

        let Usuario={};

        Usuario.email = email;
        Usuario.senha = senha;
        Usuario.usuario = usuario;
        Usuario.nome = nome;
        Usuario.telefone = telefone;

        if ((nome.length && email.length && usuario.length && senha.length)> 0){ 
           
            alert("Olá, "+Usuario.nome);
        
        }
        else{   
            alert("Confira seus dados e clique em enviar");
        }

    });

})