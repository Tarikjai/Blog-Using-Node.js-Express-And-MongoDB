const express = require("express")
const router = express.Router()
const Article  = require('../models/article')

 
const app = express()
const PORT = 3000



router.get('/new', (req,res)=>{
    res.render('articles/new',{ article : new Article()})
})

router.get('/edit/:id',async(req,res)=>{
    let article = await Article.findById( req.params.id  )
     res.render('articles/edit',{article : article})
})


router.get('/:slug',async(req,res)=>{
    let article = await Article.findOne({ slug : req.params.slug })
    if(!article)  res.redirect("/")
           res.render('articles/show',{article : article})
})



router.post('/', async (req, res, next) => {
    req.article = new Article()
    next()
}, saveArticleAndRedrect('new'))

router.put('/:id',async(req,res,next)=>{
    req.article = await Article.findById(req.params.id)
    next()
      
} , saveArticleAndRedrect('edit'))


function saveArticleAndRedrect(path) {
    return async(req,res)=>{
        let article = req.article
            article.title= req.body.title,
            article.description= req.body.description,
            article.markdown= req.body.markdown
        try {
            article = await article.save()
            console.log('Article saved:', article)
            res.redirect(`/articles/${article.slug}`)
        } catch (e) {
             
            res.render(`articles/${path}`, { article : article }

            )
        }
    }

    
}


router.delete('/:id', async(req,res)=>{
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/')
})


module.exports = router