import './App.css'
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <nav className="nav">
        <Link className="hbj" to ='/'>
        <p>Logo</p>
        </Link>
        <ul className="nav-links">
            <Link className="hbj" to ='/about'>
            <li>About</li>
            </Link>
            <Link className="hbj" to ='/shop'>
            <li>Shop</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
