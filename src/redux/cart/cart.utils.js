export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [ ...cartItems, { ...cartItemToAdd, quantity: 1}]
};

export const deleteItemFromCart = (cartItems, cartItemToDeleteId) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToDeleteId)
}

export const increaseItemQuantity = (cartItems, cartItemToIncreaseId) => {
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToIncreaseId ?
        { ...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
    )
}

export const decreaseItemQuantity = (cartItems, cartItemToDecreaseId) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToDecreaseId);

    if (existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToDecreaseId);
    }
    return ( cartItems.map(cartItem =>
        cartItem.id === cartItemToDecreaseId ? 
            { ...cartItem, quantity: cartItem.quantity - 1 } 
        : cartItem
        )
    );
}

