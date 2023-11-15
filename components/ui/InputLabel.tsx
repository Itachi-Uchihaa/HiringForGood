import {CSSProperties} from "react";

type InputLabelProps = {
    type: string;
    placeholder?: string;
    title:string;
    required?: boolean;
}

const InputLabel = ({type, placeholder, required, title } : InputLabelProps) => {
  return(
      <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">{title}</label>
          <input
          className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5"
          type={type}
          placeholder={placeholder}
          required={required}
          />
      </div>
  )
}

export default InputLabel