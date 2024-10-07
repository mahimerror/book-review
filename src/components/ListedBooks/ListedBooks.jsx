import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import { storedBooks } from "../../utility/localStorage";


const ListedBooks = () => {

    const books = useLoaderData();
    const [booksForShow, setBooksForShow] = useState([]);
    useEffect(() => {
        handleBooks();
    }, []);

    const sortByRating = () => {
        const serialBooks=booksForShow;
        const newSerial = serialBooks.sort((a, b) => {
            if (a.rating < b.rating) return -1;
            if (a.rating > b.rating) return 1;
            return 0;
        });
        newSerial.pop();
        console.log(newSerial);
        setBooksForShow(newSerial);
    }

    const handleBooks = () => {
        const bookIds = storedBooks("save-books");
        const readedBooks = books.filter(book => bookIds.includes(book.bookId.toString()));
        setBooksForShow(readedBooks);
    }

    const handleWishBooks = () => {
        const bookIds = storedBooks("wishlist-books");
        const readedBooks = books.filter(book => bookIds.includes(book.bookId.toString()));
        setBooksForShow(readedBooks);
    }


    return (
        <div className="text-center">
            <h2 className="text-4xl font-bold my-6 p-6 bg-slate-400">Books</h2>
            <div className="my-12">
                <details className="dropdown">
                    <summary className="btn m-1">Sort By <FaAngleDown /></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a onClick={sortByRating}>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Published year</a></li>
                    </ul>
                </details>
            </div>
            <div className="space-x-2 my-4">
                <button onClick={handleBooks} className="btn">Read Books</button>
                <button onClick={handleWishBooks} className="btn">Wishlist Books</button>
            </div>
            <div className="">
                {
                    booksForShow.map((book, ind) => <div key={ind}><p>{book.bookId}</p></div>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;