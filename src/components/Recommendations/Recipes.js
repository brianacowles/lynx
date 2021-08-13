import Bookmark from "../Cards/Bookmark";
import Card from "../Cards/Card";
import Attribution from "../Explore/Attribution";

import jake from "../../media/jake.jpg";
import liam from "../../media/liam.jpg"

function Recipes() {
    return (
        <div className="Recipes">
            <Card>
                <h2>Because you like High West Whiskey...</h2>
                <hr></hr>
                <Bookmark/>
                <div className="Recipe">
                    <h1>Highwayman's Pardon</h1>
                    <h2>Ingredients</h2>
                    <ul>
                        <li>1 oz High West Double Rye Whiskey</li>
                        <li>1 oz Zacapa 23</li>
                        <li>1 oz Blackberry Mango Syrup</li>
                        <li>0.75 oz Lime</li>
                        <li>0.25 oz Guava Purée</li>
                        <li>1 Dash Absinthe</li>
                        <li>2 Dashes Hops Tincture</li>
                    </ul>
                    <h2>Instructions</h2>
                    <ol>
                        <li>Add all ingredients to shaker tin with ice, shake well.</li>
                        <li>Double strain into an old fashioned glass over cubed ice.</li>
                        <li>Garnish with blackberries.</li>
                    </ol>
                </div>
                <Attribution name="Liam Rice" time="14 hours ago" image={liam}/>
            </Card>
            <Card>
                <h2>Because you like Corona Extra...</h2>
                <hr></hr>
                <Bookmark/>
                <div className="Recipe">
                    <h1>Corona Sunrise</h1>
                    <h2>Ingredients</h2>
                    <ul>
                        <li>1 bottle Corona Extra</li>
                        <li>1 oz Mi Campo tequila</li>
                        <li>1 oz orange juice</li>
                        <li>2 tsp grenadine syrup</li>
                        <li>1 tsp lime juice</li>
                    </ul>
                    <h2>Instructions</h2>
                    <ol>
                        <li>Open the Corona bottle and drink to where beer is level with the top of the label.</li>
                        <li>Pour in tequila, orange juice, grenadine, and lime juice. Place thumb over top of bottle, turn upside-down and back up to combine.</li>
                    </ol>
                </div>
                <Attribution name="Jake Andrews" time="2 days ago" image={jake}/>
            </Card>
            <Card/>
        </div>
    );
}

export default Recipes;