document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    const productsGrid = document.querySelector('.products-grid');

    // Function to handle the actual filtering logic
    function applyFilter(filter) {
        // Temporarily hide the grid for a smooth transition
        productsGrid.style.opacity = '0';
        productsGrid.style.transition = 'opacity 0.3s ease-in-out';

        setTimeout(() => {
            productCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            // Show the grid again
            productsGrid.style.opacity = '1';
        }, 100);
    }

    // Initial filter application: Show ALL products on load
    applyFilter('all');


    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');

            const filter = button.dataset.filter;
            applyFilter(filter);
        });
    });
});