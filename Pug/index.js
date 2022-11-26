const express = require('express')
const Productos = require('./metodos/claseYmetodos.js')

const PORT = process.env.PORT || 8080

const productos = new Productos();

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('formulario.pug')
})
app.get('/productos', (req, res) => {
    const listaDeProductos = productos.getAll()
    res.render('listado.pug', {listaDeProductos})
})
app.post('/productos', (req, res) => {
    productos.addProduct(req.body)
    res.redirect('/')
})

const server = app.listen(PORT, () => {
    console.log(`Server running on port http://localHost:${PORT}`)
})
server.on('error', (err) => {
    console.log(err)
})