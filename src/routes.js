const express = require('express')
const AgendaController = require('./controller/AgendaController')

const routes = express.Router()

routes.get('/', (request, response) => {
    return response.json({
        app: "Node Express"        
    })
})

routes.get('/contatos', AgendaController.index)

routes.post('/contatos', AgendaController.create)

routes.put('/contatos/:id', AgendaController.update)

routes.delete('/contatos/:id', AgendaController.delete)

module.exports = routes