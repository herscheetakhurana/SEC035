// Initialize an empty cart if not already in local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update the cart in the local storage and on the page
function updateCart() {
  localStorage.setItem('cart', JSON.stringify(cart)); // Store cart in local storage

  // Display cart items
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';

  let totalPrice = 0;
  
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItemsContainer.appendChild(li);
    totalPrice += item.price;
  });

  // Display total price
  document.getElementById('total-price').textContent = totalPrice;

  // Show the cart section if it has items
  document.getElementById('cart').style.display = cart.length > 0 ? 'block' : 'none';
}

// Add item to the cart
function addToCart(id, name, price) {
  const existingItem = cart.find(item => item.id === id);
  
  if (existingItem) {
    // If the product already exists, you can update the quantity or just leave it as it is
    alert('Product already in the cart!');
  } else {
    // Add new product to the cart
    cart.push({ id, name, price });
    updateCart(); // Update the cart display
  }
}

// Event listener for adding products to the cart
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const id = this.getAttribute('data-id');
    const name = this.getAttribute('data-name');
    const price = parseInt(this.getAttribute('data-price'));

    addToCart(id, name, price);
  });
});

// Clear the cart
document.getElementById('clear-cart').addEventListener('click', () => {
  cart = []; // Clear the cart array
  updateCart(); // Update the cart display and local storage
});

// Initialize the cart display on page load
updateCart();
<script src="cart.js"></script>
