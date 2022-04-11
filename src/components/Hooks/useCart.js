import { useEffect, useState } from 'react';
import { getStoredCart } from './AddToDb';

const useCart = () => {
    const [books, setBooks] = useState([]);
    // console.log(books)
    useEffect(() => {
        const cart = getStoredCart();
        const keysProps = Object.keys(cart);
        fetch('http://localhost:5000/books/keys', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(keysProps)
        })
            .then(res => res.json())
            .then(result => {
                if (result.length) {
                    const cartBook = result;
                    const newCart = [];
                    for (const props in cart) {
                        const book = cartBook?.find(book => book?._id === props);
                        if (book) {
                            const quantity = cart[props];
                            book.quantity = quantity;
                            newCart.push(book);
                        }
                    };
                    setBooks(newCart);
                }

            })
    }, []);

    return {
        books,
        setBooks
    }
};

export default useCart;