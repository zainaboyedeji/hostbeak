import "./appInput.scss";

function InputField({label,type,placeholder,arialabel,htmlFor}) {
    return (
        <div className="inputField mt-5">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={htmlFor}>
                {label}
            </label>
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 leading-tight focus:outline-none" type={type} placeholder={placeholder} aria-label={arialabel} />
        </div>
    )
};

export default InputField;