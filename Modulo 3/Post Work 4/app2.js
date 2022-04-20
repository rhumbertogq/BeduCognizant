const {login} = require("./Login2");
const {getToken} = require("./Login2");
const express = require('express')
const bodyParser = require('body-parser');
const port = 3000
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.raw())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/login', (req, res) => {
    const userCredentials = {email: req.body.email, password: req.body.password}
    const response = login(userCredentials)
    res.send(response)
})

app.post('/authentication', (req, res) => {
    const userCredentials = {email: req.body.email, password: req.body.password}
    const codifiedEmail = getToken(userCredentials)
    res.send(codifiedEmail)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})