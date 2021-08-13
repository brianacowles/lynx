import Bio from './Bio';
import BookLink from './BookLink';
import Favorites from './Favorites';
import Posts from './Posts';

function Profile() {
    return (
        <div className="Profile">
            <Bio/>
            <BookLink/>
            <Favorites/>
            <Posts/>
        </div>);
}

export default Profile;