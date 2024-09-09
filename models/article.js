const mongoos = require('mongoose')

const articleSchema = new mongoose.Schema({
    title : {
        type: String,
        required:true
    } ,
    description:{
        type : String,
        required: true
    },
    markdown :{
        type: String,
        required : true
    }
    ,
    createdat: {
        type:Date,
        defaut: Date.now
    }
})

module.exports = mongoos.model('Article', articleSchema )