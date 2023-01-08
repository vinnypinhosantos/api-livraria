import express from "express"

const app = express()

const livros = [
    {id: 1, "titulo": "Os Crimes ABC"},
    {id: 2, "titulo": "Morte no Nilo"}
]

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send("Curso de Node")
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    res.json(livros[index])
})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send("Livro Cadastrado com sucesso")
})

app.put('/livros/:id', (req, res) => {
    let {id} = req.params
    let index = buscaLivro(id)
    livros[index].titulo = req.body.titulo
    res.json(livros)
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params
    let index = buscaLivro(id)
    livros.splice(index, 1)
    res.send(`Livro ${id} excluido com sucesso`)
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}

export default app