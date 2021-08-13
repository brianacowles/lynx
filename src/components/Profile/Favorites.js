import Card from '../Cards/Card';
import corona from '../../media/corona.jpg';
import highwest from '../../media/high-west.png';
import kimCrawford from '../../media/kim-crawford.png'

import '../../styles/Profile/Favorites.css'

function Favorites() {
    return (
        <div className="Favorites">
            <section>
                <h1>My Favorites</h1>
                <Card>
                    <div className="favorites-grid">
                        <div className="favorites-product">
                            <img className="product-image" src={corona} alt="corona extra"></img>
                            <h1 className="product-brand">Corona Extra</h1>
                            <h3 className="product-desc">Mexican Lager</h3>
                        </div>
                        <div className="favorites-product">
                            <img className="product-image" src={highwest} alt="High West Whiskey"></img>
                            <h1 className="product-brand">High West Whiskey</h1>
                            <h3 className="product-desc">Bourbon</h3>
                        </div>
                        <div className="favorites-product">
                            <img className="product-image" src={kimCrawford} alt="Kim Crawford"></img>
                            <h1 className="product-brand">Kim Crawford</h1>
                            <h3 className="product-desc">Sauvignon Blanc</h3>
                        </div>
                    </div>
                </Card>
            </section>
        </div>
    );
}

export default Favorites;