const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const blogs = [
        {titulo: 'Articulo1', autor: 'Carlos Serrano', contenido: 'Lorem ipsum'},
        {titulo: 'Articulo2', autor: 'Carlos Serrano', contenido: 'Lorem ipsum'},
        {titulo: 'Articulo3', autor: 'Carlos Serrano', contenido: 'Lorem ipsum'}
    ];
    res.render('inicio', { titulo:'Inicio Nuevo Blogs', blogs: blogs});
});

app.get('/nosotros', (req, res) => {
    res.sendFile(__dirname + '/views/nosotros.html');
})

app.get('/productos', (req, res) => {
    res.sendFile(__dirname + '/views/productos.html');
});

app.use((req, res) => {
    res.status(404).sendFile('/views/404.html')
});

app.listen(3000, () => {
    console.log("Servidor activo en el puerto 3000")
});