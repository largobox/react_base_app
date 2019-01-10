const express = require('express')
const app = express()
const port = 3030
const data = require('./data')

app.get('/animals', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.status(200).json(data.towns)
})

// app.get('/', (req, res) => {
//     res.sendFile(`${__dirname}/dist/index.html`)
// })

// app.use(express.static('dist'))

app.listen(port, () => {
    console.log(`APP LISTEN PORT: ${port}`)
})