import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {

    const { bookId, bookName, author, rating, image, tags, category } = book;

    return (
        <div>
            <Link to={`/book/${bookId}`}>
            <div className="card bg-base-100 shadow-xl h-full">
                <figure className="p-8">
                    <img
                        className="h-36"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="flex gap-5">
                        {
                            tags.slice(0,2).map((tag,ind)=> <div key={ind}><p className="text-green-700 font-medium">{tag}</p></div>)
                        }
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p>By : {author}</p>
                    <hr className="border-dashed my-5"></hr>
                    <div className="flex justify-between items-center">
                        <div className="">
                            <p>{category}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="">
                                <p>{rating}</p>
                            </div>
                            <div className="">
                                <p><CiStar /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Book;

Book.propTypes = {
    book: PropTypes.object,
}