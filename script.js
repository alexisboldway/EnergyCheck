let hours = 24;
let energy = 100;
let business = 5;
let selfCare = 5;
let relationships = 5;
let currentScenario = 0;

const scenarios = [
    { text: "Morning Routine: How do you start your day?",
      choices: [
          { text: "Jump into work immediately", effects: { business: 2, selfCare: -2, energy: -10, hours: -1 } },
          { text: "Do a mindful morning routine", effects: { selfCare: 3, business: -1, energy: 10, hours: -1 } }
      ]
    },
    { text: "Workload Management: A client requests extra work...",
      choices: [
          { text: "Say yes to every request", effects: { business: 3, relationships: -2, energy: -15, hours: -2 } },
          { text: "Delegate some tasks", effects: { business: 2, selfCare: 1, energy: 5, hours: -1 } }
      ]
    },
    { text: "Lunch Break Decision: Do you eat or keep working?",
      choices: [
          { text: "Skip lunch for productivity", effects: { business: 2, selfCare: -3, energy: -10, hours: -1 } },
          { text: "Take a 30-minute break", effects: { selfCare: 2, energy: 5, hours: -1 } }
      ]
    },
    { text: "Your phone rings – it's a loved one...",
      choices: [
          { text: "Ignore and stay focused on work", effects: { business: 2, relationships: -3, hours: -1 } },
          { text: "Take 10 minutes to check in", effects: { relationships: 3, business: -1, hours: -1 } }
      ]
    },
    { text: "Evening Work vs. Unwinding: How do you spend the night?",
      choices: [
          { text: "Work late into the night", effects: { business: 3, selfCare: -2, energy: -10, hours: -2 } },
          { text: "Read a book and relax", effects: { selfCare: 3, energy: 5, hours: -1 } }
      ]
    },
    { text: "Weekend Plan: Take time off or work?",
      choices: [
          { text: "Work a half-day", effects: { business: 2, selfCare: -1, energy: -5, hours: -4 } },
          { text: "Take the full day off", effects: { selfCare: 3, relationships: 2, energy: 10, hours: -8 } }
      ]
    },
    { text: "A friend invites you to dinner, but you have deadlines...",
      choices: [
          { text: "Decline and work", effects: { business: 2, relationships: -3, hours: -2 } },
          { text: "Go and enjoy", effects: { relationships: 3, selfCare: 2, hours: -3 } }
      ]
    },
    { text: "Workout Time: Do you exercise today?",
      choices: [
          { text: "Skip it for more productivity", effects: { business: 2, selfCare: -3, energy: -10, hours: -1 } },
          { text: "Go for a workout", effects: { selfCare: 3, energy: 10, hours: -1 } }
      ]
    },
    { text: "Late Night Email from a Client...",
      choices: [
          { text: "Respond immediately", effects: { business: 2, relationships: -2, energy: -5, hours: -1 } },
          { text: "Wait until tomorrow", effects: { selfCare: 2, relationships: 2, hours: -1 } }
      ]
    },
    { text: "End of the Week Reflection: What will you prioritize next week?",
      choices: [
          { text: "More business growth", effects: { business: 3, selfCare: -2, hours: -1 } },
          { text: "Better balance", effects: { selfCare: 3, relationships: 2, hours: -1 } }
      ]
    }
];

function loadScenario() {
    if (currentScenario >= scenarios.length) {
        document.getElementById("scenario").innerHTML = "<h2>Challenge Completed!</h2>";
        document.getElementById("choices").innerHTML = "";
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("outro").style.display = "block";
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
    hours += effects.hours || 0;
    
    document.getElementById("business").innerText = business;
    document.getElementById("selfcare").innerText = selfCare;
    document.getElementById("relationships").innerText = relationships;
    document.getElementById("energy").innerText = energy;
    document.getElementById("hours").innerText = hours;
    
    document.getElementById("next-btn").style.display = "block";
}

function nextScenario() {
    currentScenario++;
    document.getElementById("next-btn").style.display = "none";
    loadScenario();
}

window.onload = loadScenario;
