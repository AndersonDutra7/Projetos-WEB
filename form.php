<?php
    $nome = addslashes($_POST["nome-contato"]);
    $email = addslashes($_POST["email-contato"]);
    $fone = addslashes($_POST["fone-contato"]);
    $mensagem = addslashes($_POST["msg-contato"]);

    $destinatario = "andersonrdutra7@gmail.com";
    $assunto = "Mensagem do formulário de contato";
    $mensagem_email = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Telefone: ".$fone."\n"."Mensagem: ".$mensagem;
    $header = "From: andersonrdutra7@gmail.com"."\n"."Reply-to: ".$email."\n"."X-Mailer:PHP/".phpversion();

    if(mail($destinatario,$assunto,$mensagem_email,$header)){
        echo("E-mail enviado com sucesso!");
    } else {
        echo("Houve um erro ao enviar e-mail!");
    }

}
?>
