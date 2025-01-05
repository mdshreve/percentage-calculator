document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("percent-of-btn").addEventListener("click", calculatePercentOf);
  document.getElementById("is-what-percent-btn").addEventListener("click", calculateWhatPercent);
  document.getElementById("percent-change-btn").addEventListener("click", calculatePercentChange);
});

function calculatePercentOf() {
  const percent = parseFloat(document.getElementById("percent-of-percent").value);
  const total = parseFloat(document.getElementById("percent-of-total").value);
  const answer = (percent / 100) * total;
  document.getElementById("percent-of-answer").textContent = isNaN(answer)
    ? "Answer: Invalid input"
    : `Answer: ${answer.toFixed(2)}`;
}

function calculateWhatPercent() {
  const value = parseFloat(document.getElementById("is-what-percent-value").value);
  const total = parseFloat(document.getElementById("is-what-percent-total").value);
  const answer = (value / total) * 100;
  document.getElementById("is-what-percent-answer").textContent = isNaN(answer)
    ? "Answer: Invalid input"
    : `Answer: ${answer.toFixed(2)}%`;
}

function calculatePercentChange() {
  const from = parseFloat(document.getElementById("percent-change-from").value);
  const to = parseFloat(document.getElementById("percent-change-to").value);
  const answer = ((to - from) / from) * 100;
  document.getElementById("percent-change-answer").textContent = isNaN(answer)
    ? "Answer: Invalid input"
    : `Answer: ${answer.toFixed(2)}%`;
}
