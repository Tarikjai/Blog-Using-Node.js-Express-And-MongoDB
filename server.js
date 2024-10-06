const express = require("express")
const app = express()
const articlesRouter = require('./routes/articles')

const PORT = 3000


app.use('/articles', articlesRouter)
app.set('view engine','ejs')

app.get('/', (req,res)=>{
    const articles = [{
        title :"Test Article",
        createdAt : Date.now(),
        description: "Test description"
    },{title :"Test Article",
        createdAt : Date.now(),
        description: "Test description"}]
    res.render('index.ejs', { articles : articles})
})

app.listen(PORT ,()=>{
    console.log("Server running on port: "+ PORT)
})