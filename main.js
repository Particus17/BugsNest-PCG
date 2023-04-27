// create an array of plant objects that give a description of how to care for that plant.
const plants = [
    {
      name: 'Spider Plant',
      care: 'Water once a week and keep in bright, indirect sunlight.'
    },
    {
      name: 'Snake Plant',
      care: 'Water once a month and keep in low to bright light.'
    },
    {
      name: 'Peace Lily',
      care: 'Water once a week and keep in low to bright light.'
    }
  ];
  //link to search form in html
  const searchForm = document.querySelector('#search-form');
  const careInstructions = document.querySelector('#care-instructions');
  
  searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = event.target.querySelector('input').value;
    const plant = plants.find(function(item) {
      return item.name.toLowerCase() === searchTerm.toLowerCase();
    });
    if (plant) {
      careInstructions.innerHTML = '<p>' + plant.care + '</p>';
    }
})