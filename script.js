document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const savedName = document.getElementById("savedName");
    const savedEmail = document.getElementById("savedEmail");
    const clearDataButton = document.getElementById("clearData");

    // Load saved data when the page loads
    if (localStorage.getItem("userName")) {
        savedName.textContent = "Name: " + localStorage.getItem("userName");
        savedEmail.textContent = "Email: " + localStorage.getItem("userEmail");
    }
    signupForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim(); // Not saving password

        if (name && email) {
            // Save user data in localStorage
            localStorage.setItem("userName", name);
            localStorage.setItem("userEmail", email);

            // Display saved data
            savedName.textContent = "Name: " + name;
            savedEmail.textContent = "Email: " + email;
            alert("Sign-up successful! Data saved.");

            // Clear input fields after saving
            nameInput.value = "";
            emailInput.value = "";
            passwordInput.value = "";
        }
    });

    // Clear data button
    clearDataButton.addEventListener("click", () => {
        localStorage.clear();
        savedName.textContent = "";
        savedEmail.textContent = "";
        alert("Data cleared.");
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const recipeCards = document.querySelectorAll('.recipe-card');

    recipeCards.forEach(card => {
        card.addEventListener('click', function() {
            const recipeName = this.dataset.recipeName;
            const recipeDescription = this.dataset.recipeDescription;
            const recipeImage = this.dataset.recipeImage;

            // Create a modal or overlay to display the recipe details
            const modal = document.createElement('div');
            modal.classList.add('fixed', 'inset-0', 'flex', 'items-center', 'justify-center', 'bg-black', 'bg-opacity-50', 'z-50');

            const modalContent = document.createElement('div');
            modalContent.classList.add('bg-white', 'rounded-lg', 'p-8', 'max-w-md', 'w-full');

            modalContent.innerHTML = `
                <img src="${recipeImage}" alt="${recipeName}" class="w-full h-64 object-cover rounded-lg mb-4">
                <h3 class="text-2xl font-semibold mb-2">${recipeName}</h3>
                <p class="text-gray-700">${recipeDescription}</p>
                <button class="mt-6 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md close-modal">Close</button>
            `;

            modal.appendChild(modalContent);
            document.body.appendChild(modal);

            // Close modal functionality
            modal.querySelector('.close-modal').addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        });
    });
});
