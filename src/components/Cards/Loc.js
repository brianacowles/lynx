import mondavi from '../../media/mondavi-winery.jpg'

import '../../styles/Cards/Loc.css'

function Loc() {
    return (
        <div className="Loc">
            <h1>Robert Mondavi Winery</h1>
            <h2>Oakville, CA</h2>
            <img src={mondavi} alt="Robert Mondavi Winery" />
            <p>The wine tour + tasting was intimate and lovely. Our guide, Nancy, shared a wealth of knowledge and was a delight. The vineyards are remarkable and I was pleased to learn all production takes place on the grounds. The varietals we tasted were amazing and I'm looking forward to enjoying the Cabernet we took home this week.</p>
        </div>);
}

export default Loc;