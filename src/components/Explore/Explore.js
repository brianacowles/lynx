import Bookmark from "../Cards/Bookmark";
import Card from "../Cards/Card";
import Recipe from "../Cards/Recipe";
import Rec from "../Cards/Rec"
import Loc from "../Cards/Loc"
import Attribution from "./Attribution";
import Create from "./Create"

import jake from "../../media/jake.jpg";
import meiomi from "../../media/meiomi.png";

import '../../styles/Explore/Explore.css';

function Explore() {
    return (
        <div className="Explore">
            <Create />
            <Card>
                <Bookmark filled={true} />
                <Recipe />
                <Attribution />
            </Card>
            <Card>
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
            <Card>
                <Bookmark filled={true} />
                <Rec />
                <Attribution time="1 week ago"/>
            </Card>
            <Card>
                <Bookmark/>
                <Rec title="Meiomi Rose" desc="This wine is a very light, refeshing drink, perfect for wine and cheese in the afternoon or a summer soirée. It's not too sweet or dry and the fruit flavors come through beautifully." image={meiomi}/>
                <Attribution name="Jake Andrews" time="2 weeks ago" image={jake}/>
            </Card>
            <Card>
                <Bookmark filled={true} />
                <Loc />
                <Attribution time="2 months ago"/>
            </Card>
            <Card></Card>
        </div>
    );
}

export default Explore;