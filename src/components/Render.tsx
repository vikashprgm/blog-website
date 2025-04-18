type prop = {
    heading : string,
    subcontent : string,
    tags : string[],
}
export function Render ({heading,subcontent,tags}:prop){
    return (
        <div>
            <div>{heading}</div>
            <div>{subcontent}</div>
            {tags.map(curr => <Tags tag={curr}/>)}
        </div>
    )
}

function Tags({tag} : {tag:string}){
    return (
        <div>{tag}</div>
    )
}