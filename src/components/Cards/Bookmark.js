import bookmark from '../../media/bookmark.svg'
import bookmarkFilled from '../../media/bookmark-filled.svg';

import '../../styles/Cards/Bookmark.css'
function Bookmark({filled=false}) {
    return (
        <div className="Bookmark">
            <img src={filled ? bookmarkFilled : bookmark} alt="bookmark" />
        </div>
    )
}

export default Bookmark;