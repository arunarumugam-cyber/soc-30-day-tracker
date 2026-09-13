const days = [
    "SOC Fundamentals",
    "Networking Basics",
    "Linux Basics",
    "Windows Basics",
    "Cybersecurity Fundamentals",
    "CIA Triad & Security Principles",
    "Threats & Vulnerabilities",
    "Authentication & Authorization",
    "Logs & Log Analysis",
    "Linux Log Analysis",
    "Windows Event Logs",
    "Network Security",
    "Common Network Attacks",
    "Malware Fundamentals",
    "Phishing Analysis",
    "Password Attacks",
    "Brute Force Detection",
    "SIEM Fundamentals",
    "SIEM Log Analysis",
    "Splunk Basics",
    "Incident Response",
    "Incident Investigation",
    "IOC & Threat Intelligence",
    "MITRE ATT&CK Basics",
    "Alert Investigation",
    "SOC Analyst Scenarios",
    "Python for SOC",
    "SOC Mini Project",
    "Resume & Interview Preparation",
    "Final Revision & Mock Interview"
];

const dayList = document.getElementById("dayList");

function loadProgress() {
    const saved = JSON.parse(localStorage.getItem("socProgress")) || [];

    days.forEach((topic, index) => {
        const card = document.createElement("div");
        card.className = "day-card";

        const checked = saved[index] === true;

        card.innerHTML = `
            <h3>Day ${index + 1}</h3>
            <p>${topic}</p>

            <label>
                <input 
                    type="checkbox" 
                    onchange="updateProgress(${index})"
                    ${checked ? "checked" : ""}
                >
                Completed
            </label>
        `;

        dayList.appendChild(card);
    });

    updateDashboard();
}

function updateProgress(index) {
    const checkboxes = document.querySelectorAll(
        '#dayList input[type="checkbox"]'
    );

    const progress = [];

    checkboxes.forEach((checkbox) => {
        progress.push(checkbox.checked);
    });

    localStorage.setItem("socProgress", JSON.stringify(progress));

    updateDashboard();
}

function updateDashboard() {
    const checkboxes = document.querySelectorAll(
        '#dayList input[type="checkbox"]'
    );

    let completed = 0;

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            completed++;
        }
    });

    const percentage = Math.round((completed / days.length) * 100);

    document.getElementById("completedCount").textContent = completed;
    document.getElementById("progressText").textContent = percentage + "%";
    document.getElementById("progressBar").style.width = percentage + "%";
}

function resetProgress() {
    localStorage.removeItem("socProgress");
    location.reload();
}

loadProgress();
