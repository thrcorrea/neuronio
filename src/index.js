const express = require('express');


const app = express();

app.router('/status', (req, res) => {
    res.send('ok');
});


app.listen(3000, () => {
    console.log(`Servidor ouvindo na porta 3000`);
})
