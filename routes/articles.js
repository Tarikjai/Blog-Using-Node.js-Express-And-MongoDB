const express = require("express")
const router = express.Router()

const app = express()
const PORT = 3000

 
router.get('/', (req,res)=>{
    res.render('index.ejs')
})


module.exports = router