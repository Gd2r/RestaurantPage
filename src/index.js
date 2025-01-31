import loadHomePage from './modules/home.js';
import loadMenuPage from './modules/menu.js';
import loadContactPage from './modules/contact.js';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  loadHomePage();

  const buttons = document.querySelectorAll('.tab-button');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      
      button.classList.add('active');
      
      const content = document.getElementById('content');
      content.innerHTML = '';

      const tab = button.dataset.tab;
      if (tab === 'home') loadHomePage();
      if (tab === 'menu') loadMenuPage();
      if (tab === 'contact') loadContactPage(); 
    });
  });
});