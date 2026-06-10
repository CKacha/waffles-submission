function getConeAdvice() {
  const factText = document.getElementById("factText");
  factText.textContent = "Fetching wisdom...";
  fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
      factText.textContent = `"${data.slip.advice}"`;
    })
    .catch(() => {
      factText.textContent = "No advice fetched. Just eat the ice cream.";
    });
}

function changeFlavor() {
  const flavors = [
    "Current flavor mood: Strawberry Sunshine.",
    "Current flavor mood: Mango Sorbet.",
    "Current flavor mood: Mint Chip.",
    "Current flavor mood: Cookie Dough.",
    "Current flavor mood: Blueberry."
  ];
  document.getElementById("flavorText").textContent =
    flavors[Math.floor(Math.random() * flavors.length)];
}

function setupBlendChecker() {
  const select = document.getElementById("blendSelect");
  if (!select) return;

  const descriptions = {
    berry: "Berry Blast: strawberries, blueberries, banana, and Greek yogurt.",
    green: "Green Machine: spinach, banana, apple juice, and lime.",
    tropical: "Tropical Thunder: mango, pineapple, coconut milk, and orange juice."
  };

  select.addEventListener("change", function () {
    const result = document.getElementById("blendResult");
    result.textContent = descriptions[select.value] || "Pick a blend to see what's in it.";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setupBlendChecker();
});
