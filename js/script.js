const button = document.querySelector(".button");

function sprinkleGoma(x, y) {
    for (let i = 0; i < 10; i++) {
      const dot = document.createElement("div");
      dot.className = "goma-dot";
  
      const offsetX = (Math.random() - 0.5) * 40;
      const offsetY = (Math.random() - 0.5) * 40;
  
      // オフセットを反映
      dot.style.left = `${x + offsetX}px`;
      dot.style.top = `${y + offsetY}px`;
  
      button.appendChild(dot);
    }
  }
  

// PC: クリックした位置にふりかけを追加
button.addEventListener("click", (e) => {
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  sprinkleGoma(x, y);
});

// スマホ: タップした位置にふりかけを追加
button.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  const rect = button.getBoundingClientRect();
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;
  sprinkleGoma(x, y);
});

//ふりかけを全部取る
const clearButton = document.querySelector(".clear-button");

clearButton.addEventListener("click", () => {
  const dots = document.querySelectorAll(".goma-dot");
  dots.forEach(dot => dot.remove());
});
