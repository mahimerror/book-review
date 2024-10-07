import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { checkBook, saveBooks, removeBook } from '../../utility/localStorage';

const BookDetails = () => {
    const { id } = useParams();
    const books = useLoaderData();
    const book = books.find(book => book.bookId == id);
    const {bookId, bookName, author, rating, image, tags, category, review, totalPages, publisher, yearOfPublishing } = book;

    const notify = (text) => toast(text);

    const handleBook = () => {
        if(checkBook("wishlist-books",`${bookId}`)){
            removeBook("wishlist-books",`${bookId}`);
        }

        if(saveBooks("save-books",`${bookId}`)){
            notify("Added to Books");
        }
        else{
            notify("This book is already added");
        }
    }

    const handleWishlist = () => {

        if(checkBook("save-books",`${bookId}`)){
            notify("It's already added on books");
        }
        
        else if(saveBooks("wishlist-books",`${bookId}`)){
            notify("Added to Wishlist");
        }
        else{
            notify("This book is already added on wishlist");
        }
    }

    return (
        <div className="w-11/12 mx-auto">
            <div className="flex mb-20 gap-12">
                <div className="w-1/2 bg-[#F3F3F3] rounded-2xl flex items-center justify-center">
                    <img className="h-2/3" src={image} alt="" />
                </div>
                <div className="w-1/2">
                    <h2 className="font-bold text-4xl">{bookName}</h2>
                    <p className="font-medium mt-2">By: {author}</p>
                    <hr className="my-5" />
                    <p className="font-medium">{category}</p>
                    <hr className="my-5" />
                    <p><span className="font-bold">Review : </span>{review}</p>
                    <div className="flex gap-5 my-5">

                        <div className="font-bold"><p>Tag</p></div>
                        {
                            tags.map((tag, ind) => <div key={ind}><p className="text-green-700 font-medium">#{tag}</p></div>)
                        }
                    </div>
                    <hr className="my-5" />
                    <div className="grid grid-cols-[1fr_2fr] gap-1">
                        <p>Number of Pages:</p>
                        <p className="font-bold">{totalPages}</p>
                        <p>Publisher:</p>
                        <p className="font-bold">{publisher}</p>
                        <p>Year of Publishing:</p>
                        <p className="font-bold">{yearOfPublishing}</p>
                        <p>Rating:</p>
                        <p className="font-bold">{rating}</p>
                    </div>
                    <div className="flex gap-4 mt-8">
                        <button onClick={handleBook} className="btn">Read</button>
                        <button onClick={handleWishlist} className="btn btn-info text-white">Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;