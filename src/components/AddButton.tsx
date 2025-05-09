type prop = {
    label : string,
    onclick : any
}

export function AddButton({label,onclick} : prop){
    return (
        <div className="m-2">
            <button className="border-2 p-2 cursor-pointer text-white bg-black" onClick={onclick}>{label}</button>
        </div>
    )
}