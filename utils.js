import { proxy } from 'valtio';

export var cartItems = proxy([{ 
    id: "", 
    title: "", 
    quantity: 0, 
    unitPrice: "", 
    totalPrice: 0, 
    image: "" 
}]);


export var theme = proxy( { mode:'light' });

export const setDarkTheme = () => {
    if (theme.mode === 'light') 
        theme.mode = 'dark';
};


export const setLightTheme = () => {
    if (theme.mode === 'dark') 
        theme.mode = 'light';
}


export const addItem = (product, quantity, totalPrice) => {
    let id = product.id;
    let title = product.title;
    let unitPrice = product.price;
    let image = product.image;
    if (!cartItems.find(i => i.id === id && i.title === title)) {
        cartItems.push({ id, title, quantity, unitPrice, totalPrice, image });
    }
    else {
        cartItems.map((i) => {
            if (i.id === id && i.title === title) {
                ++i.quantity;
                i.totalPrice = i.unitPrice * i.quantity;
            }
        })
    }
}

export const removeItem = (id, title) => {
    console.log(cartItems.filter((i) => (i.id !== id && i.title !== title)));
    console.log("remove function");
};

