export default function loadContactPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
  
    const contactDiv = document.createElement('div');
    contactDiv.className = 'tab-content';
  
    contactDiv.innerHTML = `
      <h1>Contact Us 📍</h1>
      <div class="contact-info">
        <p>📞 0531312120</p>
        <p>🏠 Medina, Ar Rawabi Dist.</p>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18..." 
          width="600" 
          height="450" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy">
        </iframe>
      </div>
    `;
  
    content.appendChild(contactDiv);
  }