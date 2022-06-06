import './appHeader.scss';
import { Link, NavLink } from 'react-router-dom';


const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink style={({isActive }) => 
                      (isActive ? {color: '#9f0013'} : {color: 'black'})} to="/">Characters</NavLink></li>
                    /
                    <li><NavLink style={({isActive }) => 
                      (isActive ? {color: '#9f0013'} : {color: 'black'})} to="/comics">Comics</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;