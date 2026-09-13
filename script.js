const days = [
    {
        day: 1,
        title: "SOC Fundamentals 🔴",
        week: "Week 1 — Foundation + Networking",
        tasks: [
            "Cybersecurity basics",
            "SOC என்றால் என்ன?",
            "SOC Analyst L1/L2/L3",
            "SOC workflow",
            "Security event vs alert vs incident",
            "Threat / vulnerability / risk",
            "CIA Triad",
            "Authentication vs Authorization",
            "Security controls",
            "SOC Analyst daily responsibilities",
            "Mini task: SOC workflow practice"
        ]
    },
    {
        day: 2,
        title: "Networking Fundamentals 🟢",
        week: "Week 1 — Foundation + Networking",
        tasks: [
            "Network basics",
            "OSI model",
            "TCP/IP model",
            "Encapsulation",
            "IP address",
            "IPv4",
            "IPv6",
            "Public vs Private IP",
            "Static vs Dynamic IP",
            "MAC address"
        ]
    },
    {
        day: 3,
        title: "Network Protocols 🔴",
        week: "Week 1 — Foundation + Networking",
        tasks: [
            "TCP",
            "UDP",
            "TCP 3-way handshake",
            "Ports",
            "Common ports",
            "DNS",
            "DHCP",
            "ARP",
            "ICMP",
            "HTTP",
            "HTTPS",
            "SSH",
            "Commands: ping, ip, ss, nslookup, curl"
        ]
    },
    {
        day: 4,
        title: "Network Security 🔴",
        week: "Week 1 — Foundation + Networking",
        tasks: [
            "Firewall",
            "IDS",
            "IPS",
            "VPN",
            "Proxy",
            "NAT",
            "Network segmentation",
            "Inbound vs outbound traffic",
            "Allowed vs blocked traffic",
            "Mini task: Network traffic investigation"
        ]
    },
    {
        day: 5,
        title: "Attacks 🟢/🔴",
        week: "Week 1 — Foundation + Networking",
        tasks: [
            "Malware",
            "Virus",
            "Worm",
            "Trojan",
            "Ransomware",
            "Phishing",
            "Brute force",
            "DoS/DDoS",
            "Credential attacks",
            "Man-in-the-Middle",
            "Web attacks",
            "Mini task: Attack identification"
        ]
    },
    {
        day: 6,
        title: "Network Investigation 🔴",
        week: "Week 1 — Foundation + Networking",
        tasks: [
            "Packet",
            "Packet capture",
            "Wireshark basics",
            "Source IP / Destination IP",
            "Source port / Destination port",
            "TCP flags",
            "DNS investigation",
            "HTTP investigation",
            "Suspicious traffic identification",
            "Wireshark lab"
        ]
    },
    {
        day: 7,
        title: "Project 1 🔴",
        week: "Week 1 — Foundation + Networking",
        tasks: [
            "Network Security Scanner / Traffic Investigation Project"
        ]
    },

    {
        day: 8,
        title: "Linux Security 🟢/🔴",
        week: "Week 2 — Linux + Windows Security",
        tasks: [
            "Linux filesystem",
            "Users",
            "Groups",
            "Permissions",
            "chmod",
            "chown",
            "sudo",
            "SSH",
            "Authentication"
        ]
    },
    {
        day: 9,
        title: "Linux Processes & Services 🔴",
        week: "Week 2 — Linux + Windows Security",
        tasks: [
            "Processes",
            "PID / PPID",
            "Services",
            "ps",
            "top",
            "kill",
            "systemctl",
            "Suspicious processes"
        ]
    },
    {
        day: 10,
        title: "Linux Logs 🔴",
        week: "Week 2 — Linux + Windows Security",
        tasks: [
            "/var/log",
            "auth.log",
            "syslog",
            "journalctl",
            "Login events",
            "Failed login",
            "Successful login",
            "Log timestamps",
            "Log investigation"
        ]
    },
    {
        day: 11,
        title: "Linux Log Analysis 🔴",
        week: "Week 2 — Linux + Windows Security",
        tasks: [
            "grep",
            "awk",
            "sort",
            "uniq",
            "cut",
            "head / tail",
            "find",
            "Log filtering",
            "Brute-force detection"
        ]
    },
    {
        day: 12,
        title: "Windows Security 🔴",
        week: "Week 2 — Linux + Windows Security",
        tasks: [
            "Windows users/groups",
            "Processes",
            "Services",
            "Event Viewer",
            "Windows Event Logs",
            "Security logs",
            "PowerShell basics",
            "whoami /groups",
            "Logon events",
            "Process creation events"
        ]
    },
    {
        day: 13,
        title: "Windows Investigation 🔴",
        week: "Week 2 — Linux + Windows Security",
        tasks: [
            "Failed authentication",
            "Successful authentication",
            "Account lockout",
            "Suspicious process",
            "PowerShell activity",
            "Windows security events",
            "Event IDs",
            "Windows log investigation"
        ]
    },
    {
        day: 14,
        title: "Project 2 🔴",
        week: "Week 2 — Linux + Windows Security",
        tasks: [
            "Linux SOC Log Analyzer",
            "Failed logins",
            "Successful logins",
            "Top attacker IP",
            "Brute-force detection",
            "Security alert"
        ]
    },

    {
        day: 15,
        title: "SIEM 🔴",
        week: "Week 3 — SIEM + SOC Operations + Incident Response",
        tasks: [
            "What is SIEM?",
            "SIEM architecture",
            "Log collection",
            "Log ingestion",
            "Log parsing",
            "Log normalization",
            "Log correlation",
            "SIEM dashboard",
            "SIEM alert"
        ]
    },
    {
        day: 16,
        title: "SIEM Investigation 🔴",
        week: "Week 3 — SIEM + SOC Operations + Incident Response",
        tasks: [
            "Searching logs",
            "Filtering events",
            "Time-range investigation",
            "Source IP investigation",
            "User investigation",
            "Event correlation",
            "Detection rules",
            "Threshold detection",
            "Alert generation"
        ]
    },
    {
        day: 17,
        title: "Alert Triage 🔴",
        week: "Week 3 — SIEM + SOC Operations + Incident Response",
        tasks: [
            "Alert triage",
            "Alert validation",
            "False positive",
            "True positive",
            "Severity",
            "Priority",
            "Alert enrichment",
            "Escalation",
            "Ticket creation"
        ]
    },
    {
        day: 18,
        title: "Incident Response 🔴",
        week: "Week 3 — SIEM + SOC Operations + Incident Response",
        tasks: [
            "Incident response",
            "Preparation",
            "Detection",
            "Analysis",
            "Containment",
            "Eradication",
            "Recovery",
            "Lessons learned",
            "Incident documentation"
        ]
    },
    {
        day: 19,
        title: "Threat Detection 🔴",
        week: "Week 3 — SIEM + SOC Operations + Incident Response",
        tasks: [
            "Brute-force detection",
            "Phishing detection",
            "Malware detection",
            "Suspicious login",
            "Privilege escalation",
            "Persistence",
            "Lateral movement",
            "Command & Control",
            "Data exfiltration"
        ]
    },
    {
        day: 20,
        title: "SOC Investigation 🔴",
        week: "Week 3 — SIEM + SOC Operations + Incident Response",
        tasks: [
            "Timeline analysis",
            "User behavior",
            "Process behavior",
            "Network behavior",
            "IOC identification",
            "Attack chain",
            "Root cause",
            "Severity assessment",
            "Response decision"
        ]
    },
    {
        day: 21,
        title: "Project 3 🔴",
        week: "Week 3 — SIEM + SOC Operations + Incident Response",
        tasks: [
            "SIEM-Style Brute Force Detection & Alert System"
        ]
    },

    {
        day: 22,
        title: "IOC + Threat Intelligence 🔴",
        week: "Week 4 — Threat Intelligence + MITRE + Advanced SOC",
        tasks: [
            "IOC",
            "IP IOC",
            "Domain IOC",
            "URL IOC",
            "File hash",
            "Email IOC",
            "IOC enrichment",
            "Threat reputation",
            "Threat intelligence",
            "Threat feeds"
        ]
    },
    {
        day: 23,
        title: "Phishing 🔴",
        week: "Week 4 — Threat Intelligence + MITRE + Advanced SOC",
        tasks: [
            "Phishing",
            "Spear phishing",
            "Business Email Compromise",
            "Malicious URL",
            "Suspicious domain",
            "Email headers",
            "Sender analysis",
            "Attachment analysis",
            "Phishing investigation"
        ]
    },
    {
        day: 24,
        title: "MITRE ATT&CK 🔴",
        week: "Week 4 — Threat Intelligence + MITRE + Advanced SOC",
        tasks: [
            "MITRE ATT&CK",
            "Tactics",
            "Techniques",
            "Procedures",
            "Initial Access",
            "Execution",
            "Persistence",
            "Privilege Escalation",
            "Defense Evasion",
            "Credential Access",
            "Map alerts to MITRE"
        ]
    },
    {
        day: 25,
        title: "MITRE Continued 🔴",
        week: "Week 4 — Threat Intelligence + MITRE + Advanced SOC",
        tasks: [
            "Discovery",
            "Lateral Movement",
            "Collection",
            "Command & Control",
            "Exfiltration",
            "Impact",
            "Technique mapping",
            "Attack-chain mapping",
            "Map alerts to MITRE"
        ]
    },
    {
        day: 26,
        title: "EDR + Endpoint Security 🔴",
        week: "Week 4 — Threat Intelligence + MITRE + Advanced SOC",
        tasks: [
            "EDR",
            "Endpoint telemetry",
            "Process monitoring",
            "File activity",
            "Network activity",
            "Suspicious PowerShell",
            "Malware behavior",
            "Endpoint investigation",
            "EDR vs Antivirus"
        ]
    },
    {
        day: 27,
        title: "Security Tools 🟢/🔴",
        week: "Week 4 — Threat Intelligence + MITRE + Advanced SOC",
        tasks: [
            "Wireshark",
            "Nmap",
            "SIEM",
            "EDR",
            "IDS/IPS",
            "Firewall",
            "Threat intelligence platforms",
            "VirusTotal concepts",
            "Git/GitHub for projects"
        ]
    },
    {
        day: 28,
        title: "Project 4 🔴",
        week: "Week 4 — Threat Intelligence + MITRE + Advanced SOC",
        tasks: [
            "Phishing + IOC Investigation System"
        ]
    },

    {
        day: 29,
        title: "Final Project 🔥",
        week: "Days 29–30 — Final Project + Job Preparation",
        tasks: [
            "Real-Time SOC Log Monitoring & Brute-Force Detection",
            "Linux Authentication Logs",
            "Real-Time Log Monitor",
            "Log Parser",
            "Failed Login Detection",
            "IP/User Analysis",
            "Threshold Detection",
            "SOC Alert",
            "IOC Investigation",
            "MITRE ATT&CK Mapping",
            "Severity",
            "Incident Report"
        ]
    },
    {
        day: 30,
        title: "Job Preparation 🔥",
        week: "Days 29–30 — Final Project + Job Preparation",
        tasks: [
            "Final project documentation",
            "GitHub repository",
            "README",
            "Screenshots",
            "Resume project section",
            "SOC Analyst skills section",
            "Self-introduction",
            "Technical interview",
            "Scenario-based interview",
            "HR questions",
            "Project explanation",
            "Mock SOC investigation"
        ]
    }
];

const STORAGE_KEY = "socTrackerV3";

let state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
    completed: {},
    notes: {},
    studyTime: {}
};

let timer = {
    running: false,
    day: 1,
    startTime: 0,
    sessionSeconds: 0,
    interval: null
};


// -------------------- SAVE --------------------

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}


// -------------------- FORMAT TIME --------------------

function formatTime(seconds) {
    seconds = Math.max(0, Math.floor(seconds));

    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    return (
        String(h).padStart(2, "0") + ":" +
        String(m).padStart(2, "0") + ":" +
        String(s).padStart(2, "0")
    );
}


function formatStudyTime(seconds) {
    seconds = Math.floor(seconds || 0);

    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);

    return `${h}h ${m}m`;
}


// -------------------- RENDER DAYS --------------------

function renderDays() {

    const container = document.getElementById("dayList");

    container.innerHTML = "";

    let currentWeek = "";

    days.forEach(day => {

        if (day.week !== currentWeek) {

            currentWeek = day.week;

            const weekTitle = document.createElement("div");

            weekTitle.className = "week-title";

            weekTitle.innerHTML = `
                <h2>${currentWeek}</h2>
            `;

            container.appendChild(weekTitle);
        }


        const card = document.createElement("section");

        card.className = "day-card";


        const header = document.createElement("div");

        header.className = "day-header";


        header.innerHTML = `
            <div>
                <h2>Day ${day.day} — ${day.title}</h2>
                <p id="dayProgress-${day.day}">
                    0 / ${day.tasks.length} tasks completed
                </p>
            </div>

            <label class="day-complete">
                <input
                    type="checkbox"
                    id="dayComplete-${day.day}"
                    onchange="toggleDayComplete(${day.day})"
                >
                Day Complete
            </label>
        `;


        card.appendChild(header);


        const taskList = document.createElement("div");

        taskList.className = "task-list";


        day.tasks.forEach((task, index) => {

            const key = `${day.day}-${index}`;

            const label = document.createElement("label");

            label.className = "task";


            label.innerHTML = `
                <input
                    type="checkbox"
                    ${state.completed[key] ? "checked" : ""}
                    onchange="toggleTask('${key}', ${day.day})"
                >

                <span>${index + 1}. ${task}</span>
            `;


            taskList.appendChild(label);
        });


        card.appendChild(taskList);


        const noteTitle = document.createElement("h3");

        noteTitle.innerText = "📝 Daily Notes";

        card.appendChild(noteTitle);


        const textarea = document.createElement("textarea");

        textarea.placeholder =
            "Write what you learned, commands practiced, doubts, interview points...";

        textarea.value = state.notes[day.day] || "";


        textarea.addEventListener("input", function () {

            state.notes[day.day] = this.value;

            saveState();
        });


        card.appendChild(textarea);


        const timeInfo = document.createElement("p");

        timeInfo.className = "day-study-time";

        timeInfo.innerHTML = `
            ⏱️ Study Time:
            <strong id="dayTime-${day.day}">
                ${formatStudyTime(state.studyTime[day.day] || 0)}
            </strong>
        `;

        card.appendChild(timeInfo);


        container.appendChild(card);

        updateDayProgress(day.day);
    });


    populateTimerSelect();
}


// -------------------- TASK CHECKBOX --------------------

function toggleTask(key, dayNumber) {

    const checkbox = document.querySelector(
        `.task input[onchange="toggleTask('${key}', ${dayNumber})"]`
    );

    state.completed[key] = checkbox.checked;

    saveState();

    updateDayProgress(dayNumber);

    updateDashboard();
}


// -------------------- DAY COMPLETE --------------------

function toggleDayComplete(dayNumber) {

    const checkbox =
        document.getElementById(`dayComplete-${dayNumber}`);

    days[dayNumber - 1].tasks.forEach((task, index) => {

        const key = `${dayNumber}-${index}`;

        state.completed[key] = checkbox.checked;
    });


    saveState();

    renderDays();

    updateDashboard();
}


// -------------------- DAY PROGRESS --------------------

function updateDayProgress(dayNumber) {

    const day = days[dayNumber - 1];

    let completed = 0;


    day.tasks.forEach((task, index) => {

        const key = `${dayNumber}-${index}`;

        if (state.completed[key]) {
            completed++;
        }
    });


    const progressElement =
        document.getElementById(`dayProgress-${dayNumber}`);

    if (progressElement) {

        progressElement.innerText =
            `${completed} / ${day.tasks.length} tasks completed`;
    }


    const dayCheckbox =
        document.getElementById(`dayComplete-${dayNumber}`);

    if (dayCheckbox) {

        dayCheckbox.checked =
            completed === day.tasks.length;
    }
}


// -------------------- DASHBOARD --------------------

function updateDashboard() {

    let completedTasks = 0;
    let totalTasks = 0;
    let completedDays = 0;
    let totalStudySeconds = 0;


    days.forEach(day => {

        let dayCompleted = 0;


        day.tasks.forEach((task, index) => {

            totalTasks++;

            const key = `${day.day}-${index}`;

            if (state.completed[key]) {

                completedTasks++;
                dayCompleted++;
            }
        });


        if (dayCompleted === day.tasks.length) {

            completedDays++;
        }


        totalStudySeconds +=
            state.studyTime[day.day] || 0;
    });


    const progress =
        totalTasks === 0
            ? 0
            : Math.round((completedTasks / totalTasks) * 100);


    document.getElementById("completedCount").innerText =
        completedDays;


    document.getElementById("conceptCount").innerText =
        `${completedTasks} / ${totalTasks}`;


    document.getElementById("progressText").innerText =
        `${progress}%`;


    document.getElementById("progressBar").style.width =
        `${progress}%`;


    document.getElementById("totalStudyTime").innerText =
        formatStudyTime(totalStudySeconds);


    days.forEach(day => {

        const timeElement =
            document.getElementById(`dayTime-${day.day}`);

        if (timeElement) {

            timeElement.innerText =
                formatStudyTime(state.studyTime[day.day] || 0);
        }
    });


    updateCurrentTimerDisplay();
}


// -------------------- TIMER SELECT --------------------

function populateTimerSelect() {

    const select =
        document.getElementById("timerDaySelect");

    select.innerHTML = "";


    days.forEach(day => {

        const option =
            document.createElement("option");

        option.value = day.day;

        option.innerText =
            `Day ${day.day} — ${day.title}`;


        select.appendChild(option);
    });


    select.value = timer.day;


    select.addEventListener("change", function () {

        if (timer.running) {
            pauseTimer();
        }

        timer.day = Number(this.value);

        timer.sessionSeconds = 0;

        updateCurrentTimerDisplay();
    });
}


// -------------------- TIMER --------------------

function getCurrentSessionSeconds() {

    if (!timer.running) {
        return timer.sessionSeconds;
    }


    return timer.sessionSeconds +
        Math.floor((Date.now() - timer.startTime) / 1000);
}


function updateCurrentTimerDisplay() {

    const seconds =
        getCurrentSessionSeconds();


    document.getElementById("timer").innerText =
        formatTime(seconds);


    document.getElementById("currentDayStudyTime").innerText =
        formatStudyTime(
            (state.studyTime[timer.day] || 0) + seconds
        );
}


function startTimer() {

    if (timer.running) {
        return;
    }


    timer.startTime = Date.now();

    timer.running = true;


    timer.interval =
        setInterval(updateCurrentTimerDisplay, 1000);


    updateCurrentTimerDisplay();
}


function pauseTimer() {

    if (!timer.running) {
        return;
    }


    const elapsed =
        Math.floor(
            (Date.now() - timer.startTime) / 1000
        );


    state.studyTime[timer.day] =
        (state.studyTime[timer.day] || 0) +
        elapsed;


    timer.sessionSeconds = 0;

    timer.running = false;

    clearInterval(timer.interval);

    timer.interval = null;

    saveState();

    updateCurrentTimerDisplay();

    updateDashboard();
}


function resetTimer() {

    if (timer.running) {
        pauseTimer();
    }


    timer.sessionSeconds = 0;

    updateCurrentTimerDisplay();
}


// -------------------- RESET ALL --------------------

function resetProgress() {

    const confirmReset =
        confirm(
            "Are you sure you want to reset ALL SOC progress, notes and study time?"
        );


    if (!confirmReset) {
        return;
    }


    if (timer.running) {
        clearInterval(timer.interval);
    }


    state = {
        completed: {},
        notes: {},
        studyTime: {}
    };


    timer.running = false;
    timer.sessionSeconds = 0;


    saveState();

    renderDays();

    updateDashboard();

    updateCurrentTimerDisplay();
}


// -------------------- INITIAL LOAD --------------------

renderDays();

updateDashboard();

updateCurrentTimerDisplay();
