//This is javascript file for phones.html. 
//This javascript file is named as phones.js

// Fetch the phone data and render it to the page
document.addEventListener("DOMContentLoaded", function() {
    fetch('./phones_data.json')
    .then(response => response.json())
    .then(data => {
        const phonesContainer = document.querySelector('.row.row-cols-1.row-cols-md-3.g-4');
        phonesContainer.innerHTML = ''; // Clear existing content
        data.forEach(phone => {
            phonesContainer.innerHTML += `
            <div class="col">
                <div class="card h-100">
                    <img src="${phone.image}" class="card-img-top" alt="${phone.name}">
                    <div class="card-body">
                        <h5 class="card-title">${phone.name}</h5>
                        <p class="card-text">${phone.description}</p>
                        <a href="./iphone15.html" class="btn btn-primary">View Details</a> <!-- Button to product details page -->
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">${phone.price}</small>
                    </div>
                </div>
            </div>`;
        });
    })
    .catch(error => console.error('Error loading phone data:', error));
});
