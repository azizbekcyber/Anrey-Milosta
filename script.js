
        const menuToggle = document.querySelector('.re-menu-toggle');
        const navItems = document.querySelector('.re-items');
    
        menuToggle.addEventListener('click', () => {
            navItems.classList.toggle('show');
        });