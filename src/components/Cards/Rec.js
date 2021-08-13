import corona from '../../media/corona.jpg'

import '../../styles/Cards/Rec.css'

function Rec({title="Corona Extra", desc="Love this beer. So refreshing especially in the summer here in Cali. Adding a lime gives it a nice touch.", image=corona}) {
    return (
        <div className="Rec">
            <h1>{title}</h1>
            <div className="user-rec">
                <div className="user-rec-text">
                    <p>{desc}</p>
                </div>
                <div className="user-rec-img">
                    <img src={image} alt="Corona Extra"></img>
                </div>
            </div>
        </div>);
}

export default Rec;