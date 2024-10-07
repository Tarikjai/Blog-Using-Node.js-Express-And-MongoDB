const express = require("express")
const mongoose = require('mongoose')
const app = express()
const articlesRouter = require('./routes/articles')
const Article  = require('./models/article')
const methodOverride = require('method-Override')


const PORT = 5001

mongoose.connect('mongodb+srv://tarikjaidani:Atiminou5*@cluster0.ppcyl.mongodb.net/myTravelBlog?retryWrites=true&w=majority&appName=Cluster0')
app.use(express.urlencoded({ extended: false}))



app.set('view engine','ejs')
app.use(methodOverride('_method'))


app.get('/',  async(req,res)=>{
    const articles = await Article.find().sort({createdAt :"desc"})
    res.render('articles/index', { articles : articles})
})

app.use('/articles', articlesRouter)
app.listen(PORT ,()=>{
    console.log("Server running on port: "+ PORT)
})