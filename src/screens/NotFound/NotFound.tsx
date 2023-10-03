import notFound from '../../assets/404.png'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <div style={{ textAlign: 'center', paddingTop: '10rem' }}>
                <h2>Not Found Page</h2>
                <button style={{color: '#000', background: '#000'}}>
                    <Link to="/">Go to homepage</Link>
                </button>
            </div>

            <img
                src={notFound}
                alt="Not Found Page"
                style={{ width: '300px', height: '300px', overflowY: 'hidden' }}
            />
        </div>
    )
}

export default NotFound
