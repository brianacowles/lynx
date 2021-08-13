import profile from '../media/navbar/profile.svg'
import favorites from '../media/navbar/favorites.svg'
import explore from  '../media/navbar/explore.svg'
import locate from '../media/navbar/locate.svg'
import subscriptions from '../media/navbar/subscriptions.svg'

import { Link } from 'react-router-dom'

import '../styles/NavBar.css'

function NavBar() {
    return (
        <div className="NavBar">
            <div className="nav-icons">
                <Link to="/profile">
                    <img src={profile} alt="profile page" />
                </Link>
                <Link to="/recommendations">
                    <img src={favorites} alt="favorites page" />
                </Link>
                <Link to="/explore">
                    <img src={explore} alt="explore page" />
                </Link>
                <Link to="/locate">
                    <img src={locate} alt="locate page" />
                </Link>
                <Link to="/subscriptions">
                    <img src={subscriptions} alt="subscriptions page" />
                </Link>
            </div>
        </div>
    )
}

export default NavBar;