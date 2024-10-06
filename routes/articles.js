const express = require("express")
const router = express.Router()
const Article  = require('../models/article')


const app = express()
const PORT = 3000

 
router.get('/new', (req,res)=>{
    res.render('articles/new',{ article : new Article()})
})

router.get('/:id',async(req,res)=>{
    let article = await Article.findById(req.params.id)
    if(!article)  res.redirect("/")
           res.render('articles/show',{article : article})
})

router.post('/',async (req,res)=>{
    let article = new Article({
        title : req.body.title,
        description : req.body.description,
        markdown: req.body.markdown
    })
    
   try {
    article =  await article.save()
    console.log(article)
    res.redirect(`/articles/${article.id}`)
   } catch (e) {
    res.render('articles/new',{ article : article})
    
   }
})


module.exports = router