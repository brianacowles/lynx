import '../../styles/Cards/Recipe.css'

function Recipe() {
    return (
        <div className="Recipe">
            <h1>Bee's Holiday</h1>
            <h2>Ingredients</h2>
            <ul>
                <li>2 parts SVEDKA Mango Pineapple</li>
                <li>3/4 part Fresh Lemon Juice</li>
                <li>3/4 part Honey</li>
                <li>Fresh Honeycomb</li>
            </ul>
            <h2>Instructions</h2>
            <ol>
                <li>Pour ingredients into a cocktail shaker filled with ice</li>
                <li>Shake and strain over fresh ice into a rocks glass</li>
                <li>Garnish with a honeycomb</li>
            </ol>
        </div>);
}

export default Recipe;