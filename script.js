document.addEventListener("DOMContentLoaded", () => {
  // Add event listeners for buttons and enter key
  setupCalculation("percent-of-percent", "percent-of-total", "percent-of-answer", calculatePercentOf);
  setupCalculation("is-what-percent-value", "is-what-percent-total", "is-what-percent-answer", calculateWhatPercent);
  setupCalculation("percent-change-from", "percent-change-to", "percent-change-answer", calculatePercentChange);
});

function setupCalculation(input1Id, input2Id, answerId, calculationFunction) {
  const input1 = document.getElementById(input1Id);
  const input2 = document.getElementById(input2Id);
  const answer = document.getElementById(answerId);

  // Perform calculation on button click
  document.getElementById(`${answerId.split("-")[0]}-btn`).addEventListener("click", () => {
    calculationFunction(input1, input2, answer);
  });

  // Perform calculation on Enter key press
  [input1, input2].forEach(input => {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        calculationFunction(input1, input2, answer);
      }
    });
  });

  // Make answer copyable
  answer.addEventListener("click", () => {
    if (answer.textContent.startsWith("Answer: ")) {
      const value = answer.textContent.replace("Answer: ", "").trim();
      navigator.clipboard.writeText(value).then(() => {
        answer.classList.add("copied");
        setTimeout(() => answer.classList.remove("copied"), 1500);
      });
    }
  });
}

function calculatePercentOf(input1, input2, answer) {
  const percent = parseFloat(input1.value);
  const total = parseFloat(input2.value);
  const result = (percent / 100) * total;
  answer.textContent = isNaN(result) ? "Answer: Invalid input" : `Answer: ${result.toFixed(2)}`;
}

function calculateWhatPercent(input1, input2, answer) {
  const value = parseFloat(input1.value);
  const total = parseFloat(input2.value);
  const result = (value / total) * 100;
  answer.textContent = isNaN(result) ? "Answer: Invalid input" : `Answer: ${result.toFixed(2)}%`;
}

function calculatePercentChange(input1, input2, answer) {
  const from = parseFloat(input1.value);
  const to = parseFloat(input2.value);
  const result = ((to - from) / from) * 100;
  answer.textContent = isNaN(result) ? "Answer: Invalid input" : `Answer: ${result.toFixed(2)}%`;
}
