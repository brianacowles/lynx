import empathy from "../../media/empathy.jpg";
import empathyLogo from "../../media/empathy-logo.png";
import enthusiast from "../../media/enthusiast.png";
import aficionado from "../../media/aficionado.png"
import connoisseur from "../../media/connoisseur.png";

import "../../styles/Subscriptions/Empathy.css"
import ImageCard from "../Cards/ImageCard";
import Card from "../Cards/Card";
import { Link } from "react-router-dom";

function Empathy() {
    return (
        <div className="Empathy">
            <Link to="/store">
                <i className="back fas fa-chevron-left"></i>
            </Link>
            <img className="logo" src={empathyLogo} alt="empathy logo"/>
            <img className="header-img" src={empathy} alt="empathy wines"/>
            <div className="empathy-body">
                <ImageCard image={enthusiast}>
                    <h1>Enthusiast</h1>
                    <h2>$54/shipment</h2>
                    <p>3 Shipments. 3 Bottles each.</p>
                    <p>10% off all orders</p>
                    <p>$15 Flat Rate Shipping</p>
                    <p>Cancel anytime</p>
                    <button className="empathy-buy">Buy Now</button>
                </ImageCard>
                <ImageCard image={aficionado}>
                    <h1>Aficionado</h1>
                    <h2>$102/shipment</h2>
                    <p>3 Shipments. 6 Bottles each.</p>
                    <p>15% off all orders</p>
                    <p>$15 Flat Rate Shipping</p>
                    <p>Cancel anytime</p>
                    <button className="empathy-buy">Buy Now</button>
                </ImageCard>
                <ImageCard image={connoisseur}>
                    <h1>Connoisseur</h1>
                    <h2>$204/shipment</h2>
                    <p>3 Shipments. 12 Bottles each.</p>
                    <p>15% off all orders</p>
                    <p>Shipping Included</p>
                    <p>Cancel anytime</p>
                    <button className="empathy-buy">Buy Now</button>
                </ImageCard>
                <Card/>
            </div>
        </div>
    );
}

export default Empathy;