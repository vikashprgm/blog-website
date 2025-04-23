type prop = {
    title : string,
    description : string,
    tags : string[],
    onclick : any
}

export function Render ({title,description,tags,onclick}:prop){
    return (
        <div className="flex flex-col mt-10">
            <div className="flex justify-center font-sans text-3xl font-medium text-blue-500 cursor-pointer" onClick={onclick}>{title}</div>
            <div className="flex justify-center font-mono text-md">{description}</div>
            <div className="flex justify-center">
                <div className="flex justify-center m-1 p-1 font-medium">Tags : </div>
                {tags.map((curr,index) => <Tags key={index} tag={curr}/>)}
            </div>
        </div>
    )
}

function Tags({tag} : {tag:string}){
    return (
        <div className="m-1 p-1 text-blue-900">{tag}</div>
    )
}