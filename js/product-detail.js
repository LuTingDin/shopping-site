function renderProductDetail() {
    const section = document.querySelector('.product-detail');
    const product = products.find(product => product.id === getProductId());
    section.innerHTML = `
        <img src="${product.image}">
        <div class="product-info">
            <p class="product-name">${product.name}</p>
            <p class="product-price">$${product.price}</p>
            <div class="product-description">
                <p>${product.description}</p>
            </div>
            <div class="quantity-selector">
                <button class="quantity-btn minus">-</button>
                <span class="quantity">0</span>
                <button class="quantity-btn plus">+</button>
            </div>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            <button class="buy-now" data-id="${product.id}">Buy Now</button>
        </div>
    `;
    // 數量選擇器的事件監聽'-'
    document.querySelector('.minus').addEventListener('click', function() {
        const qty = document.querySelector('.quantity');
        if (parseInt(qty.textContent) > 0) {
            qty.textContent = parseInt(qty.textContent) - 1;
        }
    });
    // 數量選擇器的事件監聽'+'
    document.querySelector('.plus').addEventListener('click', function() {
        const qty = document.querySelector('.quantity');
        qty.textContent = parseInt(qty.textContent) + 1;
});
}
// 從 URL 讀取 id 參數
function getProductId() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    return id;
}

function addToCart(productId, quantity) {
    // 1. 從 localStorage 讀取購物車資料, 沒有則回傳空陣列
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // 2. 檢查商品是否已在購物車中
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        // 有，再新增
        existingItem.quantity += quantity;
    } else {
        // 沒有，加入新商品
        cart.push({ id: productId, quantity: quantity });
    }
    // 3. 將更新後的購物車資料存回 localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    // 4. 更新購物車數量顯示
    updateCartCounter();
}
// 事件委派：監聽整個 document 的點擊事件，判斷是否點擊了加入購物車按鈕
document.addEventListener('click', function(event) {
    const quantity = parseInt(document.querySelector('.quantity').textContent);

    // 如果點擊的元素具有 .add-to-cart 類別，則執行加入購物車的邏輯
    if (event.target.classList.contains('add-to-cart')) {
        // 如果數量為 0，則不執行任何操作
        if (quantity === 0) return;
        const productId = parseInt(event.target.getAttribute('data-id'));
        addToCart(productId, quantity);
    }
    // 如果點擊的元素具有 .buy-now 類別，則執行加入購物車並跳轉到checkout的邏輯
    if(event.target.classList.contains('buy-now')) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        if (quantity > 0) addToCart(productId, quantity);
        
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length === 0) return; // cart 是空的，不跳轉到 checkout 頁面
        
        window.location.href = 'checkout.html'; // 跳轉到結帳頁面
    }
}); 

function setupLightbox() {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = lightbox.querySelector('img');

    lightbox.addEventListener('click', function() {
        lightbox.style.display = 'none'; // 點擊燈箱任意位置關閉
    });

    document.querySelector('.product-detail img').addEventListener('click', function() {
        lightboxImage.setAttribute('src', this.getAttribute('src'));
        lightbox.style.display = 'flex';
    });
}

renderProductDetail();
updateCartCounter();
setupLightbox();