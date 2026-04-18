document.querySelector('.checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止頁面重整

    // 1.讀取表單資料（name, email, address)
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const address = document.querySelector('#address').value;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // 2.將資料存到localStorage
    const orderData = {
        name: name,
        email: email,
        address: address,
        item: cart,
        total: cart.reduce((acc, item) => {
            const product = getProductById(item.id); 
            return acc + product.price * item.quantity;
        }, 0)
    };
    localStorage.setItem('orderData', JSON.stringify(orderData));

    // 3.清空localStorage的購物車資料
    localStorage.removeItem('cart');

    // 4.跳頁到 confirmation.html
    window.location.href = 'confirmation.html';
});

function renderOrderSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const ul = document.querySelector('.summary-items');
    
    ul.innerHTML = cart.map(item => {
        const product = getProductById(item.id);
        return `<li>${product.name} x ${item.quantity} — $${product.price * item.quantity}</li>`;
    }).join('');

    const total = cart.reduce((acc, item) => {
        const product = getProductById(item.id);
        return acc + product.price * item.quantity;
    }, 0);
    document.querySelector('.summary-total').textContent = `Total: $${total}`;
}

updateCartCounter();
renderOrderSummary();
