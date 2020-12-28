const html = `<!DOCTYPE html>
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
                            padding-left: 5px;
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
                        <h3 class="title">Opaa, thanks for signing up!</h3>
                        <p class="text">
                            Este projeto, é muito legal, um sistema CRUD sinistro. Espero que você
                            aproveite a experiência com o aplicativo, ele foi desenvolvido por mim, com
                            muito carinho, código e café nas madrugadas :) :)

                            <span>Fique tranquilo, não vou continuar enviando e-mails, beleza?!</span>
                        </p>
                        <p class="rodape">
                            <span>Se precisar, estou a disposição!</span>
                            Att. Edmilton Vinicius - Web Developer.
                        </p>
                    </div>
                </body>

                </html>`


module.exports = html