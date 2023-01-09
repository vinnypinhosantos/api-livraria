import express from "express"
import db from "./config/dbConnect.js"
import livros from "./models/Livro.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso.")
})

const app = express()

/*const livros = [
    {id: 1, "titulo": "Os Crimes ABC"},
    {id: 2, "titulo": "Morte no Nilo"}
]*/

app.use(express.json())

routes(app)

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    res.json(livros[index])
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params
    let index = buscaLivro(id)
    livros.splice(index, 1)
    res.send(`Livro ${id} excluido com sucesso`)
})

export default app