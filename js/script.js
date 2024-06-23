const body = document.querySelector('body');
const modeToggle = document.querySelector('.mode-toggle');
const sidebar = document.querySelector('nav');
const sidebarToogle = document.querySelector('.sidebar-toggle');

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
})

sidebarToogle.addEventListener('click', () => {
  sidebar.classList.toggle('close');
})