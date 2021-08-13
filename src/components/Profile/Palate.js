import Card from "../Cards/Card";
import Bookmark from "../Cards/Bookmark";
import Rec from "../Cards/Rec";

import svedka from "../../media/svedka.jpeg";
import mondavi from "../../media/mondavi.jpg";

function Palate() {
    return (
        <div className="Palate">
            <Card>
                <Bookmark/>
                <Rec title="SVEDKA Mango Pinapple" desc="Infused with natural flavors of ripe Filipino mango and juicy pineapple, this SVEDKA vodka is a delicious addition to countless vodka cocktails." image={svedka}/>
            </Card>
            <Card>
                <Bookmark/>
                <Rec title="Robert Mondavi Cabernet Sauvignon" desc="Dark fruits of black cherry, plum and blackberry are layered seamlessly with sweet spice, herbal, dark earth and a touch of sweet tobacco. Silky tannins and a long finish round out this Cabernet." image={mondavi}/>
            </Card>
            <Card>
                <Bookmark filled={true}/>
                <Rec desc="This Mexican Lager Beer is an even-keeled imported beer with aromas of fruity-honey and a touch of malt."/>
            </Card>
            <Card />
        </div>
    );
}

export default Palate;