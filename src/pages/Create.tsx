import {useState,ChangeEvent} from "react";
import {Textarea} from "../components/TextArea";
import { AddButton } from "../components/AddButton";
import axios from "axios";

export function Create() {
    const [sections, setSections] = useState([{ subtitle: "", content: "" }]);
    const [title,settitle] = useState("")
    const [description,setdesc] = useState("")

    const handleAddSection = () => {
    setSections([...sections, { subtitle: "", content: "" }]);
    };

    const handleSubmit = async () =>{
        await axios.post("http://localhost:3000/", {
            title,
            description,
            sections
        });
        console.log("done")
    };

    return (
        <div className="p-4">
            <div>
               <Textareastart label={"Title"} onChange={
                (e) => settitle(e.target.value)
               }/>
               <Textareastart label={"Description"} onChange={
                (e) => setdesc(e.target.value)
               }/>
            </div>
            <div>
                {sections.map((_, index) => (<Textarea key={index} sections={sections} setSections={setSections}  index={index}/>))}      
            </div>
            <div className="flex">
                <AddButton label={"Add section"} onclick={handleAddSection}/>
                <AddButton label={"Submit"} onclick={handleSubmit}/>
            </div>
        </div>
  );
}

type prop = {
    label : string,
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

function Textareastart({label,onChange} : prop){
    return (
        <div className="flex justify-center">
            <textarea
                onChange={onChange}
                placeholder={label}
                className="w-max mb-2 p-2 border rounded-xs"
                required
            />
        </div>
    )
}
