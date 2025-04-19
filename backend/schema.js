const mongoose=require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.DB_KEY);

const blogSchema=new mongoose.Schema({
    title : {
        type : String,
        required : true,
        minLength : 3,
        maxLength : 30
    },

    subheading : {
        type : String,
        required : true,
        minLength : 3
    },

    tags : {
        type : [String],
        required : false,
    }
})

const Blog=mongoose.model('Blog', blogSchema);

module.exports= {
    Blog
}
