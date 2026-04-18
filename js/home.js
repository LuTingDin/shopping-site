function renderFeatured() {
    const ul = document.querySelector('.featured ul');
    ul.innerHTML = products.filter(product => product.featured).map(product => `
        <li>
            <a href="product-detail.html?id=${product.id}">
                <img src="${product.image}">
                <p class="product-name">${product.name}</p>
                <p class="product-price">$${product.price}</p>
            </a>
        </li>
    `).join('');
}

renderFeatured();
updateCartCounter();