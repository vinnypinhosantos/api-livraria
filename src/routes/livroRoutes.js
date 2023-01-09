import express from "express"
import LivroController from "../controllers/livroController.js"

const router = express.Router()

router
    .get('/livros', LivroController.listarLivros)
    .post('/livros', LivroController.cadastrarLivro)
    .put('/livros/:id', LivroController.atualizaLivro)

export default router