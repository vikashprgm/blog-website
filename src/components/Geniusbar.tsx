import {Button} from "./Button"
import { useNavigate } from "react-router-dom";
export function Geniusbar(){
    const navigate=useNavigate();
    return (
        <div className="flex justify-center">
            <Button label="about" onclick={()=>{
                navigate("/about")
            }}></Button>
            <Button label="home" onclick={()=>{
                navigate("/")
            }}></Button>
            <Button label="photos" onclick={()=>{
                navigate("/photos")
            }}></Button>
        </div>
    )
}