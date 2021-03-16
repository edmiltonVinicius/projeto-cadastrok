const templateResetPassword = (nameUser, tokenUrl) => {
    return `<!DOCTYPE html>
                <html lang="pt-br">                
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
                    
                            .container {
                                width: 100%;
                                height: auto;
                                font-family: 'Roboto', sans-serif !important;
                                font-size: 11pt;
                            }
                    
                            .title {
                                color: #000000;
                                font-weight: bolder;
                            }
                    
                            p span {
                                display: block;
                            }
                    
                            p.text span {
                                padding: 10px 0 20px 0;
                                color: rgb(72, 73, 73);
                            }
                    
                            p.rodape {
                                font-size: 10pt;
                            }
                    
                            p.rodape span {
                                font-weight: bolder;
                                padding-bottom: 10px;
                                font-size: 11pt;
                            }
                        </style>
                    </head>                
                    <body>
                        <div class="container">
                            <h3 class="title">Opaaa, eai ${nameUser} tudo beleza?</h3>
                            <p class="text">
                                Eu recebi sua solicitação de Recuperação de senha.
                    
                                <span>
                                    Então bora resolver essa parada é só     
                                    <a href="https://projeto-cadastrok.herokuapp.com/reset-password?token=${tokenUrl}" target="_blank">Clicar aqui!</a>
                                </span>
                            </p>
                            <p class="rodape">
                                <span>Se precisar, estou a disposição!</span>
                                Att. <br>Edmilton Vinicius - Web Developer.
                            </p>
                        </div>
                    </body>                
                </html>`
} 

module.exports = templateResetPassword