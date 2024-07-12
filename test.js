<script>
    document.addEventListener('DOMContentLoaded', () => {
        const cart = [];
        const cartElement = document.createElement('div');
        cartElement.classList.add('cart');
        cartElement.innerHTML = `
            <h2>سلة التسوق</h2>
            <ul class="cart-items"></ul>
            <p class="cart-total">المجموع: 0</p>
            <button class="close-cart">إغلاق</button>
        `;
        document.body.appendChild(cartElement);

        document.querySelector('.close-cart').addEventListener('click', () => {
            cartElement.style.display = 'none';
        });

        document.querySelector('img[src="imgs/shopping-cart.png"]').addEventListener('click', () => {
            cartElement.style.display = 'block';
        });

        const updateCart = () => {
            const cartItemsElement = cartElement.querySelector('.cart-items');
            cartItemsElement.innerHTML = '';
            let total = 0;

            cart.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.name} - ${item.price}`;
                cartItemsElement.appendChild(li);
                total += parseInt(item.price);
            });

            cartElement.querySelector('.cart-total').textContent = `المجموع: ${total}`;
        };

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', () => {
                const name = button.getAttribute('data-name');
                const price = button.getAttribute('data-price');

                cart.push({ name, price });
                updateCart();
            });
        });
    });
</script>
