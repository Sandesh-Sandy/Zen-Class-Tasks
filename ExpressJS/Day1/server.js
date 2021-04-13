const express = require('express');
const fs = require('fs');

const app = express();



app.get('/download', (req, res) => {
    var text = `${new Date().toLocaleString()}`;
    fs.appendFile(`date-time.txt`, `${text}\n`, (err) => {
        if (err) throw err;
        console.log('Saved!');
        res.send(text);
    });
})

app.listen(3000, () => {
    console.log('Server Running...');
})
