import Card from "../Cards/Card";

import "../../styles/Subscriptions/Subscriptions.css"
import { Link } from "react-router-dom";

function Subscriptions() {

    return (
        <div className="Subscriptions">
            <Link to="/store"><button className="store-button"><i className="fas fa-shopping-bag"></i></button></Link>
            <i className="far fa-frown"></i>
            <h1 className="subscriptions-msg">You have no current orders.</h1>
            <p className="subscriptions-desc">Browse the <span className="store-highlight"><i className="fas fa-shopping-bag"></i> store</span> to find new packages.</p>
            <h1 className="past-orders">Past orders</h1>
            <Link to="/empathy">
                <Card>
                    <h3>Empathy Wine Club Enthusiast Box</h3>
                    <h2>Delivered: 6/11/21 - Shipment 3/3</h2>
                    <p>Three of Empathy Wines' high quality custom blends delivered right to your door.</p>
                </Card>
            </Link>
            <Card>
                <h3>The On Cloud Wine Box</h3>
                <h2>Delivered: 5/26/21</h2>
                <p>Two select wines, one white and one red, delivered to your door with personal tasting notes and recommended pairings.</p>
            </Card>
            <Card>
                <h3>Empathy Wine Club Enthusiast Box</h3>
                <h2>Delivered: 5/11/21 - Shipment 2/3</h2>
                <p>Three of Empathy Wines' high quality custom blends delivered right to your door.</p>
            </Card>
            <Card>
                <h3>Empathy Wine Club Enthusiast Box</h3>
                <h2>Delivered: 4/11/21 - Shipment 1/3</h2>
                <p>Three of Empathy Wines' high quality custom blends delivered right to your door.</p>
            </Card>
            <Card />
        </div>
    );
}

export default Subscriptions;