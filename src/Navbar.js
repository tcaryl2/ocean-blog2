import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar  = () => {
    
    return (
    <div>
        <nav className="navbar">
            <h1>The Ocean Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create New Blog</Link>
            </div>
        </nav>       
    </div>
    );
}

export default Navbar;