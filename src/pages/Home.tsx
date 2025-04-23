import { useEffect, useState } from "react";
import { Render } from "../components/Render"
import axios from "axios";
import { ViewBlog } from "../components/ViewBlog";

type Blog={
    title : string,
    description : string,
    subtitle : string[],
    content : string[],
    tags : string[],
    id : string
}

export function Home (){
    const [blogs,setblogs] = useState<Blog[]>([])

    useEffect(()=>{
        axios({
            method: 'get',
            url: 'http://localhost:3000/'
          })
            .then(function (res) {
                setblogs(res.data.blog);
            });
        // console.log(blogs);
    },[])
    

    return (
        <div className="flex flex-col justify-center">
            {blogs.map((blog) => (
                <Render key={blog.id} title={blog.title} description={blog.description} tags={blog.tags} onclick={
                    ()=>{
                        <ViewBlog title={blog.title} content={blog.content} subtitle={blog.subtitle}></ViewBlog>
                    }
                }/> ))}
        </div>
    )
}