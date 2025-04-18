import {Button} from "./Button"
import { useNavigate } from "react-router-dom";
export function Geniusbar(){
    const navigate=useNavigate();
    return (
        <div className="flex justify-center">
            <Button label="About" onclick={()=>{
                navigate("/about")
            }}></Button>
            <Button label="Home" onclick={()=>{
                navigate("/")
            }}></Button>
            <Button label="Photos" onclick={()=>{
                navigate("/photos")
            }}></Button>
        </div>
    )
}