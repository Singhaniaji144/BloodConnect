// Demo donor data
let donors = [
    {
        name: "Rahul Sharma",
        age: 23,
        blood: "O+",
        city: "Bhopal",
        phone: "9876543210"
    },
    {
        name: "Aman Verma",
        age: 25,
        blood: "A+",
        city: "Indore",
        phone: "9876543211"
    },
    {
        name: "Rohit Patel",
        age: 22,
        blood: "B+",
        city: "Bhopal",
        phone: "9876543212"
    },
    {
        name: "Vikas Singh",
        age: 24,
        blood: "AB+",
        city: "Indore",
        phone: "9876543213"
    }
];

// Search donors
function searchDonors() {
    const blood = document.getElementById("bloodGroup").value;
    const city = document.getElementById("city").value.trim().toLowerCase();
    const results = document.getElementById("donorResults");

    if (blood === "" && city === "") {
        results.innerHTML = "<p>Please select a blood group or enter a city.</p>";
        return;
    }

    const filteredDonors = donors.filter(donor => {
        const matchBlood = blood === "" || donor.blood === blood;
        const matchCity = city === "" || donor.city.toLowerCase().includes(city);

        return matchBlood && matchCity;
    });

    if (filteredDonors.length === 0) {
        results.innerHTML = "<p>No donors found.</p>";
        return;
    }

    results.innerHTML = filteredDonors.map(donor => `
        <div class="donor-card">
            <h3>${donor.name}</h3>
            <p><strong>Blood Group:</strong> ${donor.blood}</p>
            <p><strong>City:</strong> ${donor.city}</p>
            <p><strong>Age:</strong> ${donor.age}</p>
            <p><strong>Phone:</strong> ${donor.phone}</p>
        </div>
    `).join("");
}

// Donor registration
document.getElementById("donorForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const newDonor = {
        name: document.getElementById("name").value.trim(),
        age: Number(document.getElementById("age").value),
        blood: document.getElementById("group").value,
        city: document.getElementById("donorCity").value.trim(),
        phone: document.getElementById("phone").value.trim()
    };

    donors.push(newDonor);

    alert("Donor registered successfully!");

    document.getElementById("donorForm").reset();
});