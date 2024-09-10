const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const Article = require('./models/article')
const app = express()
const methodOverride = require('method-override');

mongoose.connect("mongodb://localhost/blog"/*, {useUnifiedTopology: true} , {useNewUrlParser: true}*/)

app.set('view engine', 'ejs' )

app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'));


app.get('/', async (req,res)=> {
    const articles = await Article.find().sort({createdAt: 'desc'})
    res.render('articles/index', {articles: articles})


})

app.use('/articles', articleRouter)



app.listen(5000, () => {
    console.log('Server is running on port 5000');
});