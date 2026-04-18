function renderProducts() {
    const ul = document.querySelector('.products ul');
    const sortedProducts = products.slice().sort((a, b) => a.price - b.price);
    ul.innerHTML = products.map(product => `
        <li>
            <a href="product-detail.html?id=${product.id}">
                <img src="${product.image}">
                <p class="product-name">${product.name}</p>
                <p class="product-price">$${product.price}</p>
            </a>
        </li>
    `).join('');

    // 更新標題的商品數量
    document.querySelector('.title p').textContent = `${products.length} items`;
}

renderProducts();
updateCartCounter();