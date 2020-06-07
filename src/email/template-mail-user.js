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
                            font-size: 15pt;
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

                        p.rodape span {
                            font-weight: bolder;
                            padding-bottom: 10px;
                        }

                    </style>
                </head>
                <body>
                    <div class="container">
                        <h3 class="title">Opaa, thanks for signing up!</h3>
                        <p class="text">
                            This project, it's really cool, a creepy CRUD system! I hope you
                            enjoy the experience with the application, it was developed by me, with
                            a lot of affection, code and coffee at dawn :) :)

                            <span>There is, rest assured, I won't keep sending emails, gorgeous!</span>
                        </p>
                        <p class="rodape">
                            <span>I'm at your service!</span>
                            Att. Edmilton Vinicius - Web Developer.
                        </p>
                    </div>
                </body>
                </html>`


module.exports = html