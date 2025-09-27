// Personalized Greeting on page load
const studentName = prompt("Welcome to USIU! What is your first name?");
if (studentName) {
  alert("Karibu, " + studentName + "!");
  console.log("Student entered name:", studentName);
  document.getElementById("greeting").textContent = "Hello, " + studentName;
}

// Estimator Function
function runEstimator() {
  const days = Number(prompt("How many days per week do you come to campus? (e.g., 3)"));
  const costPerTrip = Number(prompt("Average transport cost per trip in KSh? (e.g., 120)"));
  const snacksPerDay = Number(prompt("How many snacks do you usually buy per day? (e.g., 2)"));
  const snackPrice = Number(prompt("Average price per snack in KSh? (e.g., 80)"));

  if (isNaN(days) || isNaN(costPerTrip) || isNaN(snacksPerDay) || isNaN(snackPrice)) {
    alert("Please enter valid numbers for all fields.");
    return;
  }

  // Weekly costs
  const transportWeekly = days * costPerTrip * 2; // to & from
  const snacksWeekly = days * snacksPerDay * snackPrice;
  const totalWeekly = transportWeekly + snacksWeekly;

  // Savings tip
  const save10 = totalWeekly * 0.10;
  const totalWithSavings = totalWeekly - save10;

  console.log({
    days,
    costPerTrip,
    snacksPerDay,
    snackPrice,
    transportWeekly,
    snacksWeekly,
    totalWeekly,
    totalWithSavings
  });

  const summary = `
Weekly Transport: KSh ${transportWeekly}
Weekly Snacks: KSh ${snacksWeekly}
-------------------------------
Weekly Total: KSh ${totalWeekly}
If you cut 10%: KSh ${Math.round(totalWithSavings)}
Generated for: ${studentName || "USIU Student"}
  `;

  document.getElementById("summary").innerText = summary;
  alert("Check your summary on the page. All details are logged in the console.");
}

// Theme Toggle (Light/Dark)
function toggleTheme() {
  const body = document.body;
  const themeButton = document.getElementById("theme");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeButton.textContent = "Switch to Light Mode";
  } else {
    themeButton.textContent = "Switch to Dark Mode";
  }

  console.log("Theme toggled. Dark mode:", body.classList.contains("dark-mode"));
}

// Event Listeners
document.getElementById("run").addEventListener("click", runEstimator);
document.getElementById("theme").addEventListener("click", toggleTheme);
