import { useEffect } from "react";
import { useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks]= useState([]);

    useEffect(()=>{
        fetch('books.json')
        .then(res=> res.json())
        .then(data=> setBooks(data));
    },[]);

    return (
        <div className="w-11/12 mx-auto mb-20">
            <div className="text-center mb-8 mt-20">
                <h2 className="font-bold text-4xl">Books</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;