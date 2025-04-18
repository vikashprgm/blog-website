import { Render } from "../components/Render"
export function Home (){
    const arr=["abc","def","ghi"];
    return (
        <div>
            <Render heading="Hi" subcontent="this is sub" tags={arr}></Render>
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