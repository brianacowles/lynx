import profile_image from '../../media/profile-image.png';
import '../../styles/Profile/Bio.css';

function Bio() {
    return (
        <div className="Bio">
            <section className="user-bio">
                <div className="bio-col-1">
                    <img className="user-img" src={profile_image} alt="user profile"/>
                </div>
                <div className="bio-col-2">
                    <h1 className="user-name">Loren Mayfield</h1>
                    <h2 className="user-title">Corona Enthusiast</h2>
                    <p className="user-intro">
                        Wannabe surfer. Sometimes I read books and watch movies at the same time.
                    </p>
                </div>
            </section>
            <button className="user-friends">View Friends List</button>
        </div>);
}

export default Bio;