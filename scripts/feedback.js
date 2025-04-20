document.addEventListener("DOMContentLoaded", function () {
    loadFeedback();
});

function submitFeedback() {
    let name = document.getElementById("name").value;
    let feedbackText = document.getElementById("feedback").value;

    if (!name || !feedbackText) {
        alert("Please fill out both fields before submitting.");
        return;
    }

    let feedbackEntry = { name, feedbackText };
    let feedbackRecords = JSON.parse(localStorage.getItem("feedbackRecords")) || [];
    feedbackRecords.push(feedbackEntry);
    localStorage.setItem("feedbackRecords", JSON.stringify(feedbackRecords));

    alert("Feedback Submitted Successfully!");
    document.getElementById("name").value = "";
    document.getElementById("feedback").value = "";

    loadFeedback();
}

function loadFeedback() {
    let feedbackRecords = JSON.parse(localStorage.getItem("feedbackRecords")) || [];
    let feedbackList = document.getElementById("feedbackList");
    feedbackList.innerHTML = "";

    feedbackRecords.forEach((entry) => {
        let listItem = `<li><strong>${entry.name}:</strong> ${entry.feedbackText}</li>`;
        feedbackList.innerHTML += listItem;
    });
}
