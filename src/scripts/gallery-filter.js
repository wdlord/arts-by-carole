
// Script for filtering gallery cards based on filter emitted state.

document.addEventListener('gallery-filter-change', (event) => {
  const filters = event.detail;
  const cards = document.querySelectorAll('.gallery-card');

  // Means 'All' is selected, so show all.
  if (filters.length === 0) {
    cards.forEach(card => card.hidden = false);
  }
  
  // Filter based on selected categories.
  else {
    cards.forEach(card => {
      const categories = card.dataset.categories.split(',');
      const matches = filters.some(filter => categories.includes(filter));
      card.hidden = !matches;
    });
  }
});
