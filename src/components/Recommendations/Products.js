import Card from "../Cards/Card";
import Rec from "../Cards/Rec";

import modelo from "../../media/modelo.jpeg"
import pacifico from "../../media/pacifico.png"
import bellemeade from "../../media/bellemeade.jpg"
import simi from "../../media/simi.png"
import meiomi from "../../media/meiomi.png"
import Bookmark from "../Cards/Bookmark";

function Products() {
    return (
        <div className="Products">
            <h3>Our top picks for you</h3>
            <Card>
                <div className="favorites-grid">
                    <div className="favorites-product">
                        <img className="product-image" src={pacifico} alt="pacifico clara"></img>
                        <h1 className="product-brand">Pacifico Clara</h1>
                        <h3 className="product-desc">Mexican Lager</h3>
                    </div>
                    <div className="favorites-product">
                        <img className="product-image" src={bellemeade} alt="belle meade bourbon"></img>
                        <h1 className="product-brand">Belle Meade</h1>
                        <h3 className="product-desc">Bourbon</h3>
                    </div>
                    <div className="favorites-product">
                        <img className="product-image" src={simi} alt="Simi"></img>
                        <h1 className="product-brand">Simi</h1>
                        <h3 className="product-desc">Chardonnay</h3>
                    </div>
                </div>
            </Card>
            <h3>View more products</h3>
            <Card>
                <h2>Because you liked Corona Extra...</h2>
                <hr></hr>
                <Bookmark/>
                <Rec title="Modelo Especial" desc="A rich, full-flavored pilsner beer. This lager beer's golden hue is complemented by its smooth notes of orange blossom honey and hint of herb." image={modelo}/>
            </Card>
            <Card>
                <h2>Because of your friends' recs...</h2>
                <hr></hr>
                <Bookmark/>
                <Rec title="Meiomi Rose" desc="A richly layered and expressive blush wine that opens to delicate aromas of watermelon, orange peel and subtle hints of rose petal." image={meiomi}/>
            </Card>
            <Card>
                <h2>Because it's been a while...</h2>
                <hr></hr>
                <Bookmark filled={true}/>
                <Rec desc="This Mexican Lager Beer is an even-keeled imported beer with aromas of fruity-honey and a touch of malt."/>
            </Card>
            <Card/>
        </div>
    );
}

export default Products;