function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const section = document.querySelector('.cart');
    // 1. 如果購物車是空的，顯示提示訊息
    if (cart.length === 0) {
        section.innerHTML = '<p>Cart is empty.</p>';
        document.querySelector('.cart-total').textContent = 'Total: $0';
        return;
    }
    // 2. 否則，顯示購物車項目
    section.innerHTML = cart.map(item => {
        const product = getProductById(item.id);
        return `
            <div class="cart-item">
                <img src="${product.image}">
                <div class="cart-item-info">
                    <p>${product.name}</p>
                    <p>$${product.price}</p>
                    <div class="quantity-selector">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-from-cart" data-id="${item.id}">Remove</button>
                </div>
            </div>
        `;
    }).join('');
    // 3. 顯示購物車總價
    const total = cart.reduce((acc, item) => {
        const product = getProductById(item.id);
        return acc + product.price * item.quantity;
    }, 0);
    document.querySelector('.cart-total').textContent = `Total: $${total}`;
}

function updateQuantity(productId, delta) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === productId);
    if(!item) return;

    item.quantity += delta;
    if(item.quantity <= 0) {
        cart = cart.filter(item => item.id !== productId);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCounter();
}

document.addEventListener('click', function(event) {
    // 增加商品數量
    if (event.target.classList.contains('plus')) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        updateQuantity(productId, 1);
    }
    // 減少商品數量
    if (event.target.classList.contains('minus')) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        updateQuantity(productId, -1);
    }
    // 移除商品
    if (event.target.classList.contains('remove-from-cart')) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        updateQuantity(productId, -Infinity);
    }
});

renderCart();
updateCartCounter();
updateQuantity();