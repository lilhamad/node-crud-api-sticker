const knex = require('./knex');

module.exports = {
    getAll(){
        return knex('sticker');
    },
    getOne(id){
        return knex('sticker').where('id', id).first();
    },
    create(sticker){
        return knex('sticker').insert(sticker, '*');
    },
    update(id, sticker){
        // the '*' is the return query which means return all sticker
        return knex('sticker').where('id', id).update(sticker, '*');
    },
    delete(id){
        return knex('sticker').where('id', id).del();
    }
}