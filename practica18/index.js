const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/inicio.html');
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