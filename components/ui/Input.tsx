type InputProps = {
    type: string;
    placeholder:string;
    required?: boolean;
}

const Input = ({type, placeholder, required} : InputProps) => {
    return(
     <div>
         <input
             className={`p-3 pl-6 w-full h-full text-sm text-gray-900 rounded-md border border-gray-300 outline-none justify-center grow`}
             type={type}
             placeholder={placeholder}
             required={required}
         />
     </div>
    )
}

export default Input

