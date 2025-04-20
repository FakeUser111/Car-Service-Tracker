document.addEventListener("DOMContentLoaded", loadServiceRecords);

function saveServiceRecord() {
    const carModel = document.getElementById("carModel").value;
    const serviceDate = document.getElementById("serviceDate").value;
    const mileage = document.getElementById("mileage").value;
    const serviceDetails = document.getElementById("serviceDetails").value;

    if (!carModel || !serviceDate || !mileage || !serviceDetails) {
        alert("Please fill all fields!");
        return;
    }

    let records = JSON.parse(localStorage.getItem("serviceRecords")) || [];
    records.push({ carModel, serviceDate, mileage, serviceDetails });

    localStorage.setItem("serviceRecords", JSON.stringify(records));

    document.getElementById("carModel").value = "";
    document.getElementById("serviceDate").value = "";
    document.getElementById("mileage").value = "";
    document.getElementById("serviceDetails").value = "";

    loadServiceRecords();
}

function loadServiceRecords() {
    const historyTable = document.getElementById("historyTable");
    historyTable.innerHTML = ""; // Clear table before loading new records

    let records = JSON.parse(localStorage.getItem("serviceRecords")) || [];

    records.forEach((record, index) => {
        let row = historyTable.insertRow();

        row.innerHTML = `
            <td>${record.carModel}</td>
            <td>${record.serviceDate}</td>
            <td>${record.mileage}</td>
            <td>${record.serviceDetails}</td>
            <td><button class="delete-btn" onclick="deleteRecord(${index})">🗑 Delete</button></td>
        `;
    });
}

function deleteRecord(index) {
    let records = JSON.parse(localStorage.getItem("serviceRecords")) || [];
    records.splice(index, 1); // Remove record at index
    localStorage.setItem("serviceRecords", JSON.stringify(records));

    loadServiceRecords(); // Refresh the table
}
