const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Adiciona ou remove a classe 'active'
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active'); // Remove a classe 'active' ao fechar
});
