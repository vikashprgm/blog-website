const express=require("express")
const {Blog} = require("./schema")
const cors = require("cors")
const z = require("zod");
const app=express();
app.use(express.json());
app.use(cors());

const blogitems=z.object({
    title : z.string(),
    subheading : z.string(),
    tags: z.array(z.string()).optional()
})

app.get("/",async(req,res)=>{
    const blogs = await Blog.find();
    res.json({
        blog : blogs.map(blog=>({
            title : blog.title,
            heading : blog.subheading,
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
        subheading : req.body.subheading,
        tags : req.body.tags
    })    
    res.json({
        msg : "success"
    })

})

app.listen(3000);