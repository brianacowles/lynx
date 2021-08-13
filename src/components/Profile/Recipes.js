import Bookmark from "../Cards/Bookmark";
import Card from "../Cards/Card";
import Recipe from "../Cards/Recipe";

function Recipes() {
    return (
        <div className="Recipes">
            <ul className="favorites-list">
                <li><Card><Bookmark filled={true}/><Recipe/></Card></li>
                <li>
                    <Card>
                        <Bookmark filled={true}/>
                        <div className="Recipe">
                            <h1>Prospector's Elixir</h1>
                            <h2>Ingredients</h2>
                            <ul>
                                <li>1 oz American Prairie Bourbon</li>
                                <li>1 oz Avua Amburana</li>
                                <li>0.5 oz Amaro CioCiaro</li>
                                <li>0.75 oz Fennel Syrup</li>
                                <li>0.75 oz Lemon Juice</li>
                                <li>1.5 oz Club Soda</li>
                            </ul>
                            <h2>Instructions</h2>
                            <ol>
                                <li>Add all ingredients but soda to shaker tin with ice, short shake, strain into a Collins glass over swizzle ice.</li>
                                <li>Top with soda, garnish with a lemon wheel.</li>
                            </ol>
                        </div>
                    </Card>
                </li>
                <li>
                    <Card>
                        <Bookmark filled={true}/>
                        <div className="Recipe">
                            <h1>Rosé-jito</h1>
                            <h2>Ingredients</h2>
                            <ul>
                                <li>4 sprigs of fresh mint</li>
                                <li>2 oz agave syryp or simple syrup</li>
                                <li>3 oz fresh lime juice</li>
                                <li>20 oz Kim Crawford Rosé</li>
                                <li>10 oz grapefruit flavored soda water</li>
                            </ul>
                            <h2>Instructions</h2>
                            <ol>
                                <li>In a large pitcher, gently muddle mint with syrup.</li>
                                <li>Top with lime juice, Rosé and soda. Mix well.</li>
                                <li>Serve over ice and garnish with grapefruit slices.</li>
                            </ol>
                        </div>
                    </Card>
                </li>
                <li>
                    <Card>
                        <Bookmark filled={true}/>
                        <div className="Recipe">
                            <h1>Mi Campo Margarita</h1>
                            <h2>Ingredients</h2>
                            <ul>
                                <li>2 oz Tequila Mi Campo Blanco</li>
                                <li>½ oz Orange Liqueur</li>
                                <li>½ oz Agave Nectar</li>
                                <li>1 oz Fresh Lime Juice</li>
                            </ul>
                            <h2>Instructions</h2>
                            <ol>
                                <li>Measure all ingredients and combine in cocktail shaker with ice.</li>
                                <li>Shake and then strain over fresh ice in a double rocks glass.</li>
                                <li>Garnish with a lime wedge.</li>
                            </ol>
                        </div>
                    </Card>
                </li>
                <li><Card></Card></li>
            </ul>
        </div>
    );
}

export default Recipes;