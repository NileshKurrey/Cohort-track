const cartItems = document.getElementById('cart-items');
const cartTotal = document.querySelector('#cart-total h3');
let total = 0;

// Initialize cart by removing example item
document.querySelector('.cart-item')?.remove();
document.querySelector('.empty-cart').style.display = 'block';

function addToCart(itemName, price) {
    const existingItem = Array.from(cartItems.children).find(item => {
        const nameElement = item.querySelector('.item-name');
        return nameElement && nameElement.textContent === itemName;
    });

    if (existingItem) {
        updateQuantity(itemName, 1);
        return;
    }

    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <span class="item-name">${itemName}</span>
        <div>
            <button class="quantity-btn minus">-</button>
            <span class="quantity">1</span>
            <button class="quantity-btn plus">+</button>
            <span class="item-price">$${price.toFixed(2)}</span>
            <button class="remove-btn">Remove</button>
        </div>
    `;

    // Store unit price as data attribute
    cartItem.dataset.unitPrice = price;

    // Event listeners with proper null checks
    cartItem.querySelector('.minus')?.addEventListener('click', () => updateQuantity(itemName, -1));
    cartItem.querySelector('.plus')?.addEventListener('click', () => updateQuantity(itemName, 1));
    cartItem.querySelector('.remove-btn')?.addEventListener('click', () => removeItem(itemName));

    document.querySelector('.empty-cart').style.display = 'none';
    cartItems.appendChild(cartItem);
    updateTotal(price);
}

function updateQuantity(itemName, change) {
    const item = Array.from(cartItems.children).find(item => {
        const nameElement = item.querySelector('.item-name');
        return nameElement && nameElement.textContent === itemName;
    });

    if (!item) return;

    const quantityElement = item.querySelector('.quantity');
    const priceElement = item.querySelector('.item-price');
    if (!quantityElement || !priceElement) return;

    let quantity = parseInt(quantityElement.textContent) + change;
    
    if (quantity < 1) {
        removeItem(itemName);
        return;
    }

    const unitPrice = parseFloat(item.dataset.unitPrice);
    quantityElement.textContent = quantity;
    priceElement.textContent = `$${(unitPrice * quantity).toFixed(2)}`;
    
    updateTotal(unitPrice * change);
}

function removeItem(itemName) {
    const item = Array.from(cartItems.children).find(item => {
        const nameElement = item.querySelector('.item-name');
        return nameElement && nameElement.textContent === itemName;
    });

    if (!item) return;

    const quantity = parseInt(item.querySelector('.quantity').textContent);
    const unitPrice = parseFloat(item.dataset.unitPrice);
    updateTotal(-(unitPrice * quantity));
    item.remove();

    if (cartItems.children.length === 1) { // Only empty-cart div remains
        document.querySelector('.empty-cart').style.display = 'block';
    }
}

function updateTotal(change = 0) {
    total = Math.max(total + change, 0);
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}