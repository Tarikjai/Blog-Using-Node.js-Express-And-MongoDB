const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect("mongodb://localhost/blog"/*, {useUnifiedTopology: true} , {useNewUrlParser: true}*/)

app.set('view engine', 'ejs' )

app.use('/articles', articleRouter)

app.get('/', (req,res)=> {
    const articles =[{
        title:'Test articles',
        createdAt: new Date(),
        description : 'Test description'
    },
    {
        title:'Test articles',
        createdAt: new Date(),
        description : 'Test description'
    }]

    res.render('articles/index', {articles: articles})


})


app.listen(5000)