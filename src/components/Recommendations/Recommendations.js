import { useState } from "react"

import "../../styles/Recommendations/recommendations.css"
import Products from "./Products";
import Recipes from "./Recipes";

function Recommendations() {
    const pages = {
        products: "products",
        recipes: "recipes",
    }

    const [page, setPage] = useState(pages.products);

    return (
        <div className="Recommendations">
            <div className="container">
                <div className="tabs">
                    <input type="radio" id="radio-1" name="tabs" defaultChecked onClick={() => setPage(pages.products)} />
                    <label className="tab" htmlFor="radio-1"><i className="fas fa-wine-glass-alt"></i> Products</label>
                    <input type="radio" id="radio-2" name="tabs" onClick={() => setPage(pages.recipes)} />
                    <label className="tab" htmlFor="radio-2"><i className="fas fa-list-alt"></i> Recipes</label>
                    <span className="glider"></span>
                </div>
            </div>
            {page === pages.products ? (
                <Products/>
            ) : false}
            {page === pages.recipes ? (
                <Recipes/>
            ) : false}
        </div>
    );
}

export default Recommendations;