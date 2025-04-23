type prop = {
    title : string,
    subtitle : string[],
    content : string [],
}
export function ViewBlog ({title,subtitle,content}:prop){
    return (
        <div>
            <div>
                {title}
            </div>
            {subtitle.map(sub=> <Render text={sub}/> )}
            {content.map(con=><Render text={con}/>)}
        </div>
    )
}

function Render({text} : {text:string}){
    return (
        <div className="m-1 p-1 text-blue-900">{text}</div>
    )
}