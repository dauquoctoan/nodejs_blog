const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var b =10;
    var c = 20;
    var a=b+c;
    res.send('Hello World!')
})

app.listen(port, () =>  console.log(`Example app listening at http://localhost:${port}`))