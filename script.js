const days = [
    {
        day: 1,
        topic: "SOC Fundamentals",
        tasks: ["What is SOC?", "SOC Analyst role", "SOC workflow"]
    },
    {
        day: 2,
        topic: "Networking Fundamentals",
        tasks: ["IP Address", "MAC Address", "DNS", "TCP/UDP"]
    },
    {
        day: 3,
        topic: "OSI & TCP/IP",
        tasks: ["OSI Model", "TCP/IP Model", "Ports & Protocols"]
    },
    {
        day: 4,
        topic: "Linux Basics",
        tasks: ["Linux commands", "Users & Groups", "Permissions"]
    },
    {
        day: 5,
        topic: "Linux Process & System Monitoring",
        tasks: ["ps", "top", "kill", "System monitoring"]
    },
    {
        day: 6,
        topic: "Linux Logs",
        tasks: ["auth.log", "syslog", "journalctl"]
    },
    {
        day: 7,
        topic: "Linux Log Analysis Project",
        tasks: ["grep", "awk", "sort", "uniq", "Brute-force detection"]
    },
    {
        day: 8,
        topic: "Windows Fundamentals",
        tasks: ["Windows users", "Processes", "Services"]
    },
    {
        day: 9,
        topic: "Windows Event Logs",
        tasks: ["Event Viewer", "Security logs", "Event IDs"]
    },
    {
        day: 10,
        topic: "Authentication & Access",
        tasks: ["Authentication", "Authorization", "Account attacks"]
    },
    {
        day: 11,
        topic: "Cybersecurity Fundamentals",
        tasks: ["CIA Triad", "Threat", "Risk", "Vulnerability"]
    },
    {
        day: 12,
        topic: "Common Cyber Attacks",
        tasks: ["Brute Force", "DoS", "MITM", "Credential attacks"]
    },
    {
        day: 13,
        topic: "Malware Fundamentals",
        tasks: ["Virus", "Worm", "Trojan", "Ransomware"]
    },
    {
        day: 14,
        topic: "Phishing Analysis",
        tasks: ["Phishing indicators", "Email headers", "Suspicious links"]
    },
    {
        day: 15,
        topic: "Network Security",
        tasks: ["Firewall", "IDS", "IPS", "VPN"]
    },
    {
        day: 16,
        topic: "SIEM Fundamentals",
        tasks: ["What is SIEM?", "Log collection", "Correlation"]
    },
    {
        day: 17,
        topic: "SIEM Log Analysis",
        tasks: ["Search logs", "Create alerts", "Analyze events"]
    },
    {
        day: 18,
        topic: "Splunk Basics",
        tasks: ["Splunk interface", "Search", "SPL basics"]
    },
    {
        day: 19,
        topic: "IOC & Threat Intelligence",
        tasks: ["IP IOC", "Domain IOC", "Hash IOC"]
    },
    {
        day: 20,
        topic: "MITRE ATT&CK",
        tasks: ["Tactics", "Techniques", "Attack mapping"]
    },
    {
        day: 21,
        topic: "Alert Investigation",
        tasks: ["Alert triage", "False positive", "Severity"]
    },
    {
        day: 22,
        topic: "Incident Response",
        tasks: ["Identification", "Containment", "Eradication", "Recovery"]
    },
    {
        day: 23,
        topic: "SOC Investigation",
        tasks: ["Timeline", "Evidence", "Investigation process"]
    },
    {
        day: 24,
        topic: "Python for SOC",
        tasks: ["Python basics", "File handling", "Log parsing"]
    },
    {
        day: 25,
        topic: "Python SOC Project",
        tasks: ["Log parser", "IP detection", "Alert generation"]
    },
    {
        day: 26,
        topic: "SOC Analyst Scenarios",
        tasks: ["Brute-force scenario", "Phishing scenario", "Malware scenario"]
    },
    {
        day: 27,
        topic: "SOC Mini Project",
        tasks: ["Build project", "Analyze logs", "Generate report"]
    },
    {
        day: 28,
        topic: "Resume & GitHub",
        tasks: ["SOC resume", "GitHub projects", "Project explanation"]
    },
    {
        day: 29,
        topic: "SOC Interview Preparation",
        tasks: ["Technical questions", "Scenario questions", "HR questions"]
    },
    {
        day: 30,
        topic: "Final Revision & Mock Interview",
        tasks: ["Revise concepts", "Mock interview", "Job readiness check"]
    }
];

let timerSeconds = 0;
let timerInterval = null;

const dayList = document.getElementById("dayList");

function getProgress() {
    return JSON.parse(localStorage.getItem("socProgress")) || {};
}

function saveProgress(progress) {
    localStorage.setItem("socProgress", JSON.stringify(progress));
}

function loadProgress() {
    const progress = getProgress();

    days.forEach((day, index) => {

        const card = document.createElement("div");
        card.className = "day-card";

        const completed = progress[index]?.completed || false;
        const notes = progress[index]?.notes || "";

        card.innerHTML = `
            <h3>Day ${day.day} - ${day.topic}</h3>

            <p><strong>Tasks:</strong></p>

            <ul>
                ${day.tasks.map(task => `<li>${task}</li>`).join("")}
            </ul>

            <label>
                <input
                    type="checkbox"
                    onchange="updateProgress(${index})"
                    ${completed ? "checked" : ""}
                >
                Completed
            </label>

            <br><br>

            <label><strong>Daily Notes:</strong></label>

            <textarea
                id="notes-${index}"
                rows="3"
                placeholder="Write what you learned today..."
                oninput="saveNotes(${index})"
            >${notes}</textarea>
        `;

        dayList.appendChild(card);
    });

    updateDashboard();
}

function updateProgress(index) {

    const progress = getProgress();

    const checkbox = document.querySelectorAll(
        '#dayList input[type="checkbox"]'
    )[index];

    if (!progress[index]) {
        progress[index] = {};
    }

    progress[index].completed = checkbox.checked;

    saveProgress(progress);

    updateDashboard();
}

function saveNotes(index) {

    const progress = getProgress();

    if (!progress[index]) {
        progress[index] = {};
    }

    const notes = document.getElementById(`notes-${index}`).value;

    progress[index].notes = notes;

    saveProgress(progress);
}

function updateDashboard() {

    const progress = getProgress();

    let completed = 0;

    days.forEach((day, index) => {
        if (progress[index]?.completed) {
            completed++;
        }
    });

    const percentage = Math.round(
        (completed / days.length) * 100
    );

    document.getElementById("completedCount").textContent =
        completed;

    document.getElementById("progressText").textContent =
        percentage + "%";

    document.getElementById("progressBar").style.width =
        percentage + "%";
}

function resetProgress() {

    const confirmReset =
        confirm("Are you sure you want to reset all progress?");

    if (confirmReset) {
        localStorage.removeItem("socProgress");
        location.reload();
    }
}

loadProgress();

let studySeconds = 0;
let studyTimer = null;

function startTimer() {

    if (studyTimer !== null) {
        return;
    }

    studyTimer = setInterval(() => {

        studySeconds++;

        displayTimer();

    }, 1000);
}


function pauseTimer() {

    clearInterval(studyTimer);

    studyTimer = null;

    saveStudyTime();
}


function resetTimer() {

    clearInterval(studyTimer);

    studyTimer = null;

    studySeconds = 0;

    displayTimer();
}


function displayTimer() {

    const hours = Math.floor(studySeconds / 3600);

    const minutes =
        Math.floor((studySeconds % 3600) / 60);

    const seconds =
        studySeconds % 60;

    document.getElementById("timer").textContent =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;
}


function saveStudyTime() {

    let total =
        Number(localStorage.getItem("totalStudySeconds")) || 0;

    total += studySeconds;

    localStorage.setItem(
        "totalStudySeconds",
        total
    );

    studySeconds = 0;

    displayTotalStudyTime();
}


function displayTotalStudyTime() {

    const total =
        Number(localStorage.getItem("totalStudySeconds")) || 0;

    const hours =
        Math.floor(total / 3600);

    const minutes =
        Math.floor((total % 3600) / 60);

    document.getElementById("totalStudyTime").textContent =
        `${hours}h ${minutes}m`;
}


displayTotalStudyTime();
displayTimer();

