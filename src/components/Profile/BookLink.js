import book from '../../media/book.svg';
import arrow from '../../media/right-arrow.svg';
import Card from '../Cards/Card';
import '../../styles/Profile/BookLink.css'
import { Link } from 'react-router-dom';

function BookLink() {
    return(
        <div className="BookLink">
            <section>
                <Link to="/book">
                    <Card>
                        <img className="book-link-icon" src={book} alt="user book" />
                        <h1 className="book-link-text">View My Book</h1>
                        <img className="arrow" src={arrow} alt="right arrow" />
                    </Card>
                </Link>
            </section>
        </div>
    )
}

export default BookLink;