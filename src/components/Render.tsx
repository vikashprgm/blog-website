type prop = {
    heading : string,
    subcontent : string,
    tags : string[],
}
export function Render ({heading,subcontent,tags}:prop){
    return (
        <div className="flex flex-col mt-10">
            <div className="flex justify-center font-sans text-3xl font-medium text-blue-500">{heading}</div>
            <div className="flex justify-center font-mono text-md">{subcontent}</div>
            <div className="flex justify-center">
                <div className="flex justify-center m-1 p-1 font-medium">Tags : </div>
                {tags.map(curr => <Tags tag={curr}/>)}
            </div>
        </div>
    )
}

function Tags({tag} : {tag:string}){
    return (
        <div className="m-1 p-1 text-blue-900">{tag}</div>
    )
}