const express = require('express')
const Article = require('./../models/article.js')
const router = express.Router()


router.get('/new', (req,res)=>{
    res.render('articles/new', { article: new Article()})

})


router.get('/:id', (req,res)=>{
    res.render('articles/new')
})





router.post('/', async (req,res)=>{

    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown,
    })
    try {
        await article.save()
            res.redirect(`articles/${router.get('/new', (req,res)=>{
                res.render('articles/new')
            })
        }`)
    }
    catch(e){
        res.render('articles/new', {article: article})
    }
    
})
module.exports = router

