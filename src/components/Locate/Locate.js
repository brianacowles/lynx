import '../../styles/Locate/Locate.css'

import search from "../../media/search.svg";

function Locate() {

    return (
        <div className="Locate">
            <img className="search-icon" src={search} alt="search icon"></img>
            <input className="search-bar" type="text" />
        </div>
    );
}

export default Locate;