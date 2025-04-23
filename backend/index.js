const express=require("express")
const {Blog} = require("./schema")
const cors = require("cors")
const z = require("zod");
const app=express();
app.use(express.json());
app.use(cors());

const blogitems=z.object({
    title : z.string(),
    description : z.string(),
    subtitle : z.array(z.string()),
    content : z.array(z.string()),
    tags: z.array(z.string()).optional()
})

app.get("/",async(req,res)=>{
    const blogs = await Blog.find();
    res.json({
        blog : blogs.map(blog=>({
            title : blog.title,
            description : blog.description,
            subtitle : blog.subtitle,
            content : blog.content,
            tags : blog.tags,
            id : blog._id
        }))
    })
})

app.post("/",async(req,res)=>{
    const {success}= blogitems.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const blogdetails=await Blog.create({
        title : req.body.title,
        description : req.body.description,
        content : req.body.content,
        subtitle : req.body.subtitle,
        tags : req.body.tags
    })    
    res.json({
        msg : "success"
    })

})

app.listen(3000);