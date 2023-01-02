interface InputProps {
    labelName: string,
    placeholder: string,
    type?: string,
    name?: string
}

export const Input: React.FC<InputProps> = ({ labelName, placeholder, type, name }) => {
    return(
        <div>
            <label className="font-medium" htmlFor={name}>{labelName}</label>
            <input 
                type={type} 
                placeholder={placeholder} 
                name={name} 
                className="border-2 border-green rounded-md w-full h-12 px-3 py-1" />
        </div>
    )
}