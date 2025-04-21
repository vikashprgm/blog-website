import { useEffect, useState } from "react";
import { Render } from "../components/Render"
import axios from "axios";

type Blog={
    title : string,
    heading : string,
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
                <Render key={blog.id} heading={blog.heading} subcontent={blog.title} tags={blog.tags} /> ))}
        </div>
    )
}