document.addEventListener("DOMContentLoaded", function () {
    loadBookings();
});

function bookService() {
    let carModel = document.getElementById("carModel").value;
    let serviceDate = document.getElementById("serviceDate").value;
    let serviceType = document.getElementById("serviceType").value;

    if (!carModel || !serviceDate || !serviceType) {
        alert("Please fill all fields before booking.");
        return;
    }

    let booking = { carModel, serviceDate, serviceType };
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("Service Booked Successfully!");
    loadBookings();
}

function loadBookings() {
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    let bookingList = document.getElementById("bookingList");
    bookingList.innerHTML = "";

    bookings.forEach((booking) => {
        let row = `<tr>
                    <td>${booking.carModel}</td>
                    <td>${booking.serviceDate}</td>
                    <td>${booking.serviceType}</td>
                   </tr>`;
        bookingList.innerHTML += row;
    });
}

