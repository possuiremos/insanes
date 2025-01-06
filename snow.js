// Criar flocos de neve
function createSnowflakes() {
    const snowContainer = document.getElementById("snow");
  
    for (let i = 0; i < 50; i++) {
      const flake = document.createElement("div");
      flake.className = "snowflake";
      flake.textContent = "❄";
      flake.style.left = Math.random() * 100 + "vw";
      flake.style.animationDuration = Math.random() * 3 + 2 + "s";
      flake.style.fontSize = Math.random() * 20 + 10 + "px";
      snowContainer.appendChild(flake);
    }
  }
  
  createSnowflakes();
  