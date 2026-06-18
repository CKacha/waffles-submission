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

function setupImageRotation() {
  const icecreamImg = document.getElementById("iceCreamImg");
  const smoothieImg = document.getElementById("smoothieImg");

  if (icecreamImg) {
    const icecreamImages = [
      "images/icecream1.jpg",
      "images/icecream2.jpg",
      "images/icecream3.jpg"
    ];

    let currentIcecreamIndex = 0;

    setInterval(() => {
      currentIcecreamIndex = (currentIcecreamIndex + 1) % icecreamImages.length;
      icecreamImg.src = icecreamImages[currentIcecreamIndex];
    }, 5000);
  }

  if (smoothieImg) {
    const smoothieImages = [
      "images/smoothie1.jpg",
      "images/smoothie2.jpg",
      "images/smoothie3.jpg"
    ];

    let currentSmoothieIndex = 0;

    setInterval(() => {
      currentSmoothieIndex = (currentSmoothieIndex + 1) % smoothieImages.length;
      smoothieImg.src = smoothieImages[currentSmoothieIndex];
    }, 5000);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setupBlendChecker();
  setupImageRotation();
});