import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/latest-news">LATEST NEWS</Link>
                        </li>
                        <li>
                            <Link to="/popular-news">POPULAR NEWS</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
