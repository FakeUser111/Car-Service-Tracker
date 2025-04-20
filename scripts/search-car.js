document.getElementById("searchBtn").addEventListener("click", async () => {
    const searchInput = document.getElementById("searchInput").value.trim();
    const resultsDiv = document.getElementById("results");

    if (!searchInput) {
        alert("Please enter a car make (e.g., Toyota, BMW)");
        return;
    }

    resultsDiv.innerHTML = "<p>Searching...</p>";

    const API_URL = `https://api.api-ninjas.com/v1/cars?make=${searchInput}`;
    const API_KEY = "yVZeBAoz5809gKfW+r5dpg==8t301zVQFBCETgkT"; // Replace with your actual API Key

    try {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                "X-Api-Key": API_KEY
            }
        });

        const data = await response.json();

        if (data.length === 0) {
            resultsDiv.innerHTML = "<p>No car models found. Try another make.</p>";
            return;
        }

        // Display results
        resultsDiv.innerHTML = "<h3>Car Models Found:</h3>";
        data.forEach(car => {
            const carCard = document.createElement("div");
            carCard.classList.add("car-card");

            carCard.innerHTML = `
                <h3>${car.make} - ${car.model}</h3>
                <p><strong>Year:</strong> ${car.year}</p>
                <p><strong>Fuel Type:</strong> ${car.fuel_type}</p>
                <p><strong>Transmission:</strong> ${car.transmission}</p>
                <p><strong>Drive Type:</strong> ${car.drive}</p>
                <p><strong>City MPG:</strong> ${car.city_mpg}</p>
                <p><strong>Highway MPG:</strong> ${car.highway_mpg}</p>
            `;

            resultsDiv.appendChild(carCard);
        });

    } catch (error) {
        console.error("Error fetching car models:", error);
        resultsDiv.innerHTML = "<p>Error fetching data. Please try again later.</p>";
    }
});

