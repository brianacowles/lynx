import { useState } from "react";
import "../../styles/Profile/Book.css";
import BookFavorites from "./BookFavorites";
import Palate from "./Palate";
import Recipes from "./Recipes";

function Book() {

    const pages = {
        palate: "palate",
        favorites: "favorites",
        recipes: "recipes",
    }

    const [page, setPage] = useState(pages.favorites);

    return (
        <div className="Book">
            <div className="container">
                <div className="book-tabs">
                    <input type="radio" id="radio-1" name="book-tabs" onClick={() => setPage(pages.palate)} />
                    <label className="tab" htmlFor="radio-1"><i className="fas fa-palette"></i> Palate</label>
                    <input type="radio" id="radio-2" name="book-tabs" defaultChecked  onClick={() => setPage(pages.favorites)} />
                    <label className="tab" htmlFor="radio-2"><i className="fas fa-heart"></i> Favorites</label>
                    <input type="radio" id="radio-3" name="book-tabs" onClick={() => setPage(pages.recipes)} />
                    <label className="tab" htmlFor="radio-3"><i className="fas fa-list-alt"></i> Recipes</label>
                    <span className="glider"></span>
                </div>
            </div>
            <div className="book-content">
                {page === pages.palate ? (
                    <Palate/>
                ) : false}
                {page === pages.favorites ? (
                    <BookFavorites/>
                ) : false}
                {page === pages.recipes ? (
                    <Recipes/>
                ) : false}
            </div>
        </div>
    );
}

export default Book;