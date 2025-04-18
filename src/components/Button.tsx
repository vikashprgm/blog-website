type ButtonProps = {
    label: string;
    onclick: () => any;
  };
  
  export function Button({ label, onclick }: ButtonProps) {
    return (
      <div className="">
        <button className="p-1 m-2 border-1 rounded-md font-mono cursor-pointer" onClick={onclick}>{label}</button>
      </div>
    );
  }