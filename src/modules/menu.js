export default function loadMenuPage() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
  
    const menuDiv = document.createElement('div');
    menuDiv.className = 'tab-content';
  
    menuDiv.innerHTML = `
      <h1>Our Menu 🍽️</h1>
      <div class="menu-item">
        <h3>8 Piece Chicken Meal</h3>
        <p>Fried Broast chicken 8 pieces</p>
        <p class="price">$9.99</p>
      </div>
      <div class="menu-item">
        <h3>10 Piece Chicken Nuggets Meal</h3>
        <p>Fried Chicken Nuggets with garlic sauce</p>
        <p class="price">$4.99</p>
      </div>
    `;
  
    content.appendChild(menuDiv);
  }