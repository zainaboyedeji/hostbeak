import "./appInput.scss";

function AppInput({label,type,placeholder,arialabel,htmlFor,className,inputClass,labelClassName}) {
    return (
        <div className={className}>
            <label className={labelClassName} htmlFor={htmlFor}>
                {label}
            </label>
            <input className={inputClass} type={type} placeholder={placeholder} aria-label={arialabel} />
        </div>
    )
};

export default AppInput;