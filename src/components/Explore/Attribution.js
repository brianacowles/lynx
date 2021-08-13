import profile_img from '../../media/profile-image.png';
import '../../styles/Explore/Attribution.css';

function Attribution({name="Loren Mayfield", time="4 hours ago", image=profile_img}) {
    return (
        <div className="Attribution">
            <hr></hr>
            <div className="attr-grid">
                <img src={image} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <p>{time}</p>
                </div>
            </div>
        </div>
    );
}

export default Attribution;