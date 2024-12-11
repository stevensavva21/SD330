function loadParkingLots() {
    const lots = [
        { name: "Donnelly", spots: 10 },
        { name: "Foy", spots: 5 },
        { name: "Dyson", spots: 7 },
        { name: "Fontaine", spots: 0 },
        { name: "Upper West", spots: 3 },
        { name: "Lower West", spots: 8 }
    ];

    const lotsList = document.getElementById("lots-list");
    lotsList.innerHTML = "";

    lots.forEach((lot) => {
        const li = document.createElement("li");
        li.textContent = `${lot.name} - ${lot.spots > 0 ? lot.spots + " spots available" : "Full"}`;
        lotsList.appendChild(li);
    });
}

function reserveSpot() {
    const lotSelect = document.getElementById("lot-select").value;
    const reserveResult = document.getElementById("reserve-result");

    const lots = {
        Donnelly: 10,
        Foy: 5,
        Dyson: 7,
        Fontaine: 0,
        "Upper West": 3,
        "Lower West": 8
    };

    if (lots[lotSelect] > 0) {
        reserveResult.textContent = `Successfully reserved a spot in ${lotSelect}!`;
        reserveResult.style.color = "green";
    } else {
        reserveResult.textContent = `${lotSelect} is full. Cannot reserve a spot.`;
        reserveResult.style.color = "red";
    }
}

function viewAccount() {
    const accountDetails = document.getElementById("account-details");
    accountDetails.innerHTML = `
        <p><strong>Name:</strong> Steven Savva</p>
        <p><strong>Email:</strong> steven.savva1@marist.edu</p>
        <p><strong>Membership:</strong> Premium</p>
    `;
}

window.onload = loadParkingLots;
