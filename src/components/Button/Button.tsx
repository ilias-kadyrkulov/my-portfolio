import './Button.scss'
import { Link } from 'react-router-dom'

const Button = () => {
    return (
        <button>
            <Link to="/my-portfolio/contact">Get in touch</Link>
        </button>
    )
}

export default Button
