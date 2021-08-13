import Card from "../Cards/Card";
import Rec from "../Cards/Rec";

import highwest from "../../media/high-west.png";
import kim from "../../media/kim-crawford.png";
import Bookmark from "../Cards/Bookmark";

function BookFavorites() {
    return (
        <div className="BookFavorites">
            <Card>
                <Bookmark filled={true}/>
                <Rec desc="This Mexican Lager Beer is an even-keeled imported beer with aromas of fruity-honey and a touch of malt."/>
            </Card>
            <Card>
                <Bookmark filled={true}/>
                <Rec title="Kim Crawford Sauvignon Blanc" desc="This dry white is fresh and juicy with ripe, tropical flavors of passion fruit, melon, and stone fruit." image={kim}/>
            </Card>
            <Card>
                <Bookmark filled={true}/>
                <Rec title="High West Whiskey" desc="A carefully crafted blend of straight bourbons at least 2 years old, making a great sipper and thoughtful person’s whiskey." image={highwest}/>
            </Card>
            <Card />
        </div>
    );
}

export default BookFavorites;