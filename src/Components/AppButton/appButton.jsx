import "./appButton.scss";

function AppButton({title,className}) {
    return (
        <button className={className}>{title}</button>
    )
};

export default AppButton;