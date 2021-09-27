const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use('/', routes)


app.listen(PORT, function(){
    console.log("variaveis configuradas")
    const {DBHOST, DBPORT, DBNAME, DBUSER, DBPASS} = process.env
    console.log(DBHOST, DBPORT, DBNAME, DBUSER, DBPASS)

    for (const key in process.env) {
        console.log("variavel: ", key, "valor: ", process.env[key])
    }
    console.log("iniciado...")
})