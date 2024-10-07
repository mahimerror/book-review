




const storedBooks = key => {
    const books = localStorage.getItem(key);
    if (books)
        return JSON.parse(books);
    return [];
}

const checkBook = (key, id) => {
    const books = storedBooks(key);
    const exists = books.find(bookId => bookId === id);
    if (exists) {
        return 1;
    }
    else {
        return 0;
    }
}

const removeBook = (key, id) => {
    const books = storedBooks(key);
    const newBooks = books.filter(bookId => bookId !== id);
    localStorage.setItem(key, JSON.stringify(newBooks));
}

const saveBooks = (key, id) => {
    const books = storedBooks(key);
    const exists = books.find(bookId => bookId === id);
    if (!exists) {
        books.push(id);
        localStorage.setItem(key, JSON.stringify(books));
        return 1;
    }
    else {
        return 0;
    }
}

export { storedBooks, saveBooks, checkBook, removeBook}