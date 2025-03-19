let hours = 24;
let energy = 100;
let business = 5;
let selfCare = 5;
let relationships = 5;
let currentScenario = 0;

const scenarios = [
    {
        text: "Morning Routine: How do you start your day?",
        choices: [
            { text: "Jump into work immediately", effects: { business: 2, selfCare: -2, energy: -10 } },
            { text: "Do a mindful morning routine", effects: { selfCare: 3, business: -1, energy: 10 } }
        ]
    },
    {
        text: "Workload Management: A client requests extra work...",
        choices: [
            { text: "Say yes to every request", effects: { business: 3, relationships: -2, energy: -15 } },
            { text: "Delegate some tasks", effects: { business: 2, selfCare: 1, energy: 5 } }
        ]
    },
    {
        text: "Time for Lunch: Do you take a break?",
        choices: [
            { text: "Skip lunch to work", effects: { business: 2, selfCare: -3, energy: -10 } },
            { text: "Take a 30-minute lunch break", effects: { selfCare: 2, energy: 5 } }
        ]
    },
    {
        text: "You get an urgent text from a family member...",
        choices: [
            { text: "Ignore it and focus on work", effects: { business: 2, relationships: -3 } },
            { text: "Take 10 minutes to check in", effects: { relationships: 3, business: -1 } }
        ]
    },
    {
        text: "Evening Work vs. Unwinding: How do you spend the night?",
        choices: [
            { text: "Keep working late", effects: { business: 3, selfCare: -2, energy: -10 } },
            { text: "Wind down with a book", effects: { selfCare: 3, energy: 5 } }
        ]
    },
    {
        text: "Weekend Plans: Do you take a full day off?",
        choices: [
            { text: "Work a half-day", effects: { business: 2, selfCare: -1, energy: -5 } },
            { text: "Take the full day to recharge", effects: { selfCare: 3, relationships: 2, energy: 10 } }
        ]
    },
    {
        text: "A friend invites you to dinner but you have work...",
        choices: [
            { text: "Decline and keep working", effects: { business: 2, relationships: -3 } },
            { text: "Go and enjoy", effects: { relationships: 3, selfCare: 2 } }
        ]
    },
    {
        text: "Workout Time: Do you exercise today?",
        choices: [
            { text: "Skip it to be more productive", effects: { business: 2, selfCare: -3, energy: -10 } },
            { text: "Go for a workout", effects: { selfCare: 3, energy: 10 } }
        ]
    },
    {
        text: "Late Night Email from a Client...",
        choices: [
            { text: "Respond immediately", effects: { business: 2, relationships: -2, energy: -5 } },
            { text: "Wait until tomorrow", effects: { selfCare: 2, relationships: 2 } }
        ]
    },
    {
        text: "End of the Week Reflection: What will you prioritize next week?",
        choices: [
            { text: "More business growth", effects: { business: 3, selfCare: -2 } },
            { text: "Better balance", effects: { selfCare: 3, relationships: 2 } }
        ]
    }
];

function loadScenario() {
    if (currentScenario >= scenarios.length) {
        document.getElementById("scenario").innerHTML = `<h2>Game Over! Your Final Scores:</h2>
            <p><strong>Business:</strong> ${business}</p>
            <p><strong>Self-Care:</strong> ${selfCare}</p>
            <p><strong>Relationships:</strong> ${relationships}</p>`;
        document.getElementById("choices").innerHTML = "";
        document.getElementById("next-btn").style.display = "none";
        return;
    }

    let scenario = scenarios[currentScenario];
    document.getElementById("scenario").innerText = scenario.text;
    let choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    scenario.choices.forEach((choice, index) => {
        let button = document.createElement("button");
        button.innerText = choice.text;
        button.onclick = () => selectChoice(choice.effects);
        choicesDiv.appendChild(button);
    });
}

function selectChoice(effects) {
    business += effects.business || 0;
    selfCare += effects.selfCare || 0;
    relationships += effects.relationships || 0;
    energy += effects.energy || 0;
    
    document.getElementById("business").innerText = business;
    document.getElementById("selfcare").innerText = selfCare;
    document.getElementById("relationships").innerText = relationships;
    document.getElementById("energy").innerText = energy;
    
    document.getElementById("next-btn").style.display = "block";
}

function nextScenario() {
    currentScenario++;
    document.getElementById("next-btn").style.display = "none";
    loadScenario();
}

window.onload = loadScenario;
