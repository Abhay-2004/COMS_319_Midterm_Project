document.addEventListener("DOMContentLoaded", function() {
    fetch('./laptops_data.json') // Ensure the path to your JSON file is correct
    .then(response => response.json())
    .then(data => {
        const laptopsContainer = document.querySelector('.row.row-cols-1.row-cols-md-3.g-4');
        laptopsContainer.innerHTML = '';
        data.forEach(laptop => {
            laptopsContainer.innerHTML += `
            <div class="col">
                <div class="card h-100">
                    <img src="${laptop.image}" class="card-img-top" alt="${laptop.title}">
                    <div class="card-body">
                        <h5 class="card-title">${laptop.title}</h5>
                        <p class="card-text">${laptop.description}</p>
                        <a href="${laptop.detailsPage}" class="btn btn-primary">View Details</a>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">${laptop.price}</small>
                    </div>
                </div>
            </div>`;
        });
    })
    .catch(error => console.error('Error loading laptop data:', error));
});
