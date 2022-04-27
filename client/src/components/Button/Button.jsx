import './Button.css'
function Button({name}) {
    return (
        <div>
            <button className='button' href="/">{name}</button>
        </div>
    );

}

export default Button;