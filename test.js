document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.add-to-cart');
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const itemName = button.getAttribute('data-name');
            const itemPrice = button.getAttribute('data-price');
            alert(`تمت إضافة ${itemName} إلى السلة بسعر ${itemPrice}`);
            addToCart(itemName, itemPrice);
        });
    });

    function addToCart(itemName, itemPrice) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const item = { name: itemName, price: itemPrice };
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
});
