function renderConfirmation() {
    // 1. 從localStorage讀取訂單資料
    const orderData = JSON.parse(localStorage.getItem('orderData'));
    if (!orderData) {
        document.querySelector('.confirmation').innerHTML = '<p>No order data found.</p>';
        return;
    }

    // 2. 顯示訂單資料
    const confirmationDiv = document.querySelector('.confirmation');
    confirmationDiv.innerHTML = `
        <p>Orderer Name : ${orderData.name}</p>
        <p>Email : ${orderData.email}</p>
        <p>Shipping Address : ${orderData.address}</p>
        <p>Items : ${orderData.item.map(i => {
            const product = getProductById(i.id);
            return `${product.name} x ${i.quantity}`;
        }).join('</b><br>')}</p>
        <p>Total : $${orderData.total}</p>
        <a href="index.html" class="back-button">Back to Home</a>
    `;
}

renderConfirmation();