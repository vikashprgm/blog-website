import { Render } from "../components/Render"
export function Home (){
    const arr=["maths","fests","crazy_nashe"];
    /// prop : string , string , string [] ;
    return (
        <div className="flex flex-col justify-center">
            <Render heading="This Prof. is crazy" subcontent="description is busy giving re-exams, check later :)" tags={arr}></Render>
            <Render heading="What the f*ck even happened" subcontent="next time i'll know how to not do fests" tags={arr}></Render>
            
            {/* 
            for i in range :
                print :{
                    heading,
                    subcontent,
                    tags,
                    }   
            so i need a heading rendered 
            which takes prop as input.         
            */}

        </div>
    )
}