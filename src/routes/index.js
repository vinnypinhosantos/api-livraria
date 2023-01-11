import express from "express"
import autores from "./autorRoutes.js"
import livros from "./livroRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de Node"})
    })

    app.use(
        express.json(),
        livros,
        autores
    )
}

export default routes