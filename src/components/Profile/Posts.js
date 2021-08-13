import filter from '../../media/filter.svg';
import Card from '../Cards/Card';
import Recipe from '../Cards/Recipe'
import Rec from '../Cards/Rec';
import Loc from '../Cards/Loc';
import Bookmark from '../Cards/Bookmark';

import '../../styles/Profile/Posts.css'

function Posts() {
    return (
        <div className="Posts">
            <section>
                <div className="posts-header">
                    <h1>My Posts</h1>
                    <button className="filter">
                        <img src={filter} alt="filter"/>
                    </button>
                    <nav className="menu">
                        <ul>
                            <li>Recipes</li>
                            <li>Products</li>
                            <li>Locations</li>
                        </ul>
                    </nav>
                </div>
                <Card>
                    <Bookmark filled={true} />
                    <Recipe />
                </Card>
                <Card>
                    <Bookmark filled={true} />
                    <Rec />
                </Card>
                <Card>
                    <Bookmark filled={true} />
                    <Loc />
                </Card>
                <Card>
                </Card>
            </section>
        </div>);
}

export default Posts;