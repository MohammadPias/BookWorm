const addToDb = (id) => {
    const exist = localStorage.getItem('shopping_cart');
    let shopping_cart = {};
    if (!exist) {
        shopping_cart[id] = 1;
    }
    else {
        shopping_cart = JSON.parse(exist);
        if (shopping_cart[id]) {
            const newCart = shopping_cart[id] + 1;
            shopping_cart[id] = newCart;
        }
        else {
            shopping_cart[id] = 1;
        }
    };
    updateDb(shopping_cart);
};
const updateDb = (cart) => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart))
};
const removeFromDb = id => {
    console.log(id)
    const exist = getDb()
    console.log(exist)
    if (!exist) {

    }
    else {
        const shopping_cart = JSON.parse(exist);
        delete shopping_cart[id];
        updateDb(shopping_cart);
    };

};
const getDb = () => {
    localStorage.getItem('shopping_Cart');
}
const getStoredCart = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
}

const clearTheCart = () => {
    localStorage.removeItem('shopping_cart');
}

export { addToDb, removeFromDb, getDb, getStoredCart, clearTheCart }