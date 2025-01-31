export default function loadHomePage() {
    const content = document.getElementById('content');
  
    // Create elements
    const image = document.createElement('img');
    image.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    image.alt = 'Restaurant interior';
    image.className = 'restaurant-image';
  
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Delicious Bites! 🍴';
  
    const description = document.createElement('p');
    description.textContent = 'Since 1995, we\'ve been serving mouth-watering dishes made with locally-sourced ingredients. Whether you\'re craving juicy steaks, fresh seafood, or decadent desserts, our chefs craft every meal with passion and care.';
  
    const list = document.createElement('ul');
    list.innerHTML = `
      <li>🏆 Award-winning cuisine</li>
      <li>🌱 Farm-to-table freshness</li>
      <li>🍷 Curated wine selection</li>
    `;
  
    // Append to #content
    content.append(image, headline, description, list);
  }