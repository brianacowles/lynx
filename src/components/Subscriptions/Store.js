import Card from "../Cards/Card";

import onCloudWine from "../../media/oncloudwine.png";
import wineBox1 from "../../media/winebox1.png";
import wineBox3 from "../../media/winebox3.png";
import kimsBox from "../../media/kimsbox.png";
import kimLogo from "../../media/kim_logo.png";
import meiomiLogo from "../../media/meiomi_logo.png";
import simiLogo from "../../media/simi_logo.png";
import storeImage from "../../media/store.jpg";
import sevenMoons from "../../media/7moons.jpg";
import empathyLogo from "../../media/empathy-square-logo.png";

import "../../styles/Subscriptions/Store.css";
import { Link } from "react-router-dom";

function Store() {
    return (
        <div className="Store">
            <h1 className="logo"><i className="fas fa-shopping-bag"></i> Store</h1>
            <img className="store-img" src={storeImage} alt="store" />
            <div className="store-content">
                <h1>Shop by Brand</h1>
                <div className="brands">
                    <Link to="/empathy">
                        <img src={empathyLogo} className="brand" alt="empathy"/>
                    </Link>
                    <img src={kimLogo} className="brand" alt="kim crawford"/>
                    <img src={meiomiLogo} className="brand" alt="meiomi"/>
                    <img src={simiLogo} className="brand" alt="simi"/>
                    <img src={sevenMoons} className="brand" alt="7 moons"/>
                </div>
                <h1>Recommended Packages</h1>
                <Card>
                    <h1>Kim's Box</h1>
                    <h2>$24.99</h2>
                    <img src={kimsBox} alt="subscription box"/>
                    <p>Make it Amazing&trade; this summer with Kim Crawford's best selling Sauvignon Blanc and Rosé with cocktail recipe booklet.</p>
                    <button className="store-buy">Buy Now</button>
                </Card>
                <Card>
                    <h1>California Dreamin'</h1>
                    <h2>$37.99</h2>
                    <img src={wineBox1} alt="subscription box"/>
                    <p>Our favorite California wines in one box: Simi 2019 Sauvignon Blanc, Simi 2017 Merlot, and Meiomi Pinot Noir.</p>
                    <button className="store-buy">Buy Now</button>
                </Card>
                <hr></hr>
                <h1>Popular Packages</h1>
                <Card>
                    <h1>The On Cloud Wine Box</h1>
                    <img src={onCloudWine} alt="subscription box"/>
                    <p>Two select wines, one white and one red, delivered to your door with personal tasting notes and recommended pairings.</p>
                    <button className="store-buy">Buy Now</button>
                </Card>
                <Card>
                    <h1>Frosé All Day</h1>
                    <img src={wineBox3} alt="subscription box"/>
                    <p>Cool down this summer with our frosé kit. Blend Kim Crawford Rosé with ice and our sugared strawberry mix.</p>
                    <button className="store-buy">Buy Now</button>
                </Card>
                <Card />
            </div>
        </div>
    );
}

export default Store;