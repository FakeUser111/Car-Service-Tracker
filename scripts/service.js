function calculateNextService() {
    let lastServiceDate = document.getElementById("lastServiceDate").value;
    let mileage = parseInt(document.getElementById("mileage").value);
    
    if (!lastServiceDate || isNaN(mileage)) {
        alert("Please enter a valid service date and mileage.");
        return;
    }
    
    let nextServiceDate = new Date(lastServiceDate);
    nextServiceDate.setMonth(nextServiceDate.getMonth() + 6); // Assuming service every 6 months
    
    let recommendedMileage = mileage + 10000; // Assuming next service after 10,000 km
    
    document.getElementById("nextServiceDate").innerHTML = 
        `Next Service Date: ${nextServiceDate.toDateString()} <br> Recommended Mileage: ${recommendedMileage} km`;
}

