const express = require('express');
const router = express.Router();

const queries = require('../db/queries');
const sticker = require('../sticker');
const { request } = require('../app');

function isValidId(req, res, next){
    if(!isNaN(req.params.id)) return next();
    next(new Error('invalid ID'));
}

function validSticker(sticker){
    const hasTitle = typeof sticker.title == 'string' && sticker.title.trim() != '';
    const hasUrl = typeof sticker.url == 'string' && sticker.title.trim() != '';
    const hasDescription = typeof sticker.description == 'string' && sticker.description.trim() != '';
    const hasRating = !isNaN(sticker.rating);
    const isJson = typeof sticker == 'object';
    console.log(hasTitle, hasUrl , hasDescription ,hasRating);
    return hasTitle && hasUrl && hasDescription && hasRating && isJson;
}

router.get('/', (req, res) => {
    queries.getAll().then(stickers => {
        res.json(stickers);
    })
});

router.get('/:id', isValidId, (req, res, next) => {
        queries.getOne(req.params.id).then(sticker => {
            console.log(sticker);
            if(sticker){
                res.json(sticker);
            }else{
                next();
            }
        })
});

router.post('/', (req, res, next) => {
    if(validSticker(req.body)){
        console.log(req.body);
        console.log("FROM BODY");
        
        queries.create(req.body).then(stickers => {
            res.json(stickers[0]);
        });
    }else{
        next(new Error('Invalid sticker'));
    }
});

router.put('/:id', isValidId, (req, res, next) => {
    if(validSticker(req.body)){
        queries.update(req.params.id, req.body).then(stickers => {
            res.json(stickers[0]);
        });
    }else{
        next(new Error('Invalid sticker'));
    }
});


module.exports = router;