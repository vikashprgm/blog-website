import { useEffect, useState } from "react";
import { Render } from "../components/Render"
import axios from "axios";
import { ViewBlog } from "../components/ViewBlog";

type section={
    subtitle : string,
    content : string
}

type Blog={
    title : string,
    description : string,
    sections : section[]
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
    },[])
    

    return (
        <div className="flex flex-col justify-center">
            {blogs.map((blog) =>{ 
                const subtitles = blog.sections.map((section) => section.subtitle);
                const contents = blog.sections.map((section) => section.content);

                return (
                <Render key={blog.id} title={blog.title} description={blog.description} tags={blog.tags}
                 onclick={
                    ()=>{
                        <ViewBlog title={blog.title} content={contents} subtitle={subtitles}></ViewBlog>
                    }
                }/>)
            })}
        </div>
    )
}