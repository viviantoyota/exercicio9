const app = require('./src/app')

const PORT = 5000

app.listen(PORT, function (request, response) {
    console.log("O Nosso app esta rodando na porta " + PORT)
})