const express = require('express')
const app = express()
const port = 3030

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`)
})

app.use(express.static('dist'))

app.listen(port, () => {
    console.log(`APP LISTEN PORT: ${port}`)
})