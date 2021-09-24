const conn = require('../db/connection')

module.exports = {
    getAll(){
        return conn('agenda')
            .select([
                'nome',
                'telefone'
            ])
    },
    create(nome, telefone){
        return conn('agenda')
            .returning('id')
            .insert({
                nome,
                telefone
            })
    },
    update(id, nome, telefone){
        return conn('agenda')
            .where('id', '=', id)
            .update({
                nome,
                telefone
            })
    },
    delete(id){
        return conn('agenda')
            .where('id', '=', id)
            .del()
    }
}