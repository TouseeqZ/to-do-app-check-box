import React, { DOMAttributes } from "react";

type InputProps = {
  name: string;
  type?: string;
  placeholder: string;
  value?: string | boolean
  classN?:string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({
  placeholder,
  value,
  onChange,
  name,
  type ,
  classN
}: InputProps) {
  const stringValue = typeof value === "boolean" ? value.toString() : value;
  return (
    <input
      type={type}
      name={name}
      value={stringValue}
      className={classN}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
interface ButtonProp  {
  button_value: string,
  classN?:string;
  onclick?:(event: any) => void;
};
export  function Button({button_value,onclick, classN}:ButtonProp) {
  return (
    <div >
    <button  onClick={onclick} className='px-4 py-2  text-white font-bold  rounded-md  bg-stone-700 hover:bg-stone-950'>
    {button_value}
  </button>
  </div>
  );
  
}
