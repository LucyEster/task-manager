import './Button.css';


const Button = ({ id, handleFunc, className, icon, text, active }) => {

    const activeComplete = active ? 'CheckButton-Active' : '';
    const classes = `${className} ${activeComplete}`;

    return (
        <div className={classes} onClick={() => handleFunc(id)}>
            <i className={icon}></i>
            {text && (
                <p>{text}</p>
            )}
        </div>
    );
}

export default Button;