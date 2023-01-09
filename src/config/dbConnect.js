import mongoose from "mongoose"

mongoose.connect('mongodb+srv://vinicius:admin-123@vinicius.mn6kkxm.mongodb.net/api-livraria')

let db = mongoose.connection

export default db