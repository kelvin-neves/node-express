const dao = require('../dao/AgendaDAO')

module.exports = {
    async index(request, response){
        try {
            const contatos = await dao.getAll()
            return response.json(contatos)
        } catch (error) {
            console.log(error)
            return response.status(500).json({
                error: "Erro interno do sistema"
            })
        }
    },
    async create(request, response){
        console.log("create: ", request.body)
        const { nome, telefone } = request.body
        // try {
            const [id] = await dao.create(nome, telefone)
            return response.status(201).json({ id })
        // } catch (error) {
        //     console.log(error)
        //     return response.status(500).json({
        //         error: "Erro interno do sistema"
        //     })
        // }
    },
    async update(request, response){
        const { id } = request.params
        const { nome, telefone } = request.body

        try {
            const ret = await dao.update(id, nome, telefone)
            console.log("update: ", ret)
            if(!ret){
                return response.status(404).json({
                    error: "Registro não encontrado"
                })
            }
            return response.status(204).send()
        } catch (error) {
            console.log(error)
            return response.status(500).json({
                error: "Erro interno do sistema"
            }) 
        }
    },
    async delete(request, response){
        const { id } = request.params

        try {
            const ret = await dao.delete(id)
            if(!ret){
                return response.status(404).json({
                    error: "Registro não encontrado"
                })
            }
            return response.status(204).send()
        } catch (error) {
            console.log(error)
            return response.status(500).json({
                error: "Erro interno do sistema"
            }) 
        }
    }
}