// Click counter
const counters = {
  youtube: parseInt(localStorage.getItem("count-youtube") || "0"),
  instagram: parseInt(localStorage.getItem("count-instagram") || "0"),
  website: parseInt(localStorage.getItem("count-website") || "0"),
};

function renderCounts() {
  document.getElementById("count-youtube").innerText = counters.youtube;
  document.getElementById("count-instagram").innerText = counters.instagram;
  document.getElementById("count-website").innerText = counters.website;
  document.getElementById("total-clicks").innerText =
    counters.youtube + counters.instagram + counters.website;
}

window.increment = function (key) {
  counters[key]++;
  localStorage.setItem("count-" + key, counters[key]);
  renderCounts();
};

renderCounts();

// Matrix effect
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const letters = Array(256).fill(0);
function drawMatrix() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0F0";
  letters.map((y_pos, index) => {
    const text = String.fromCharCode(3e4 + Math.random() * 33);
    const x = index * 10;
    ctx.fillText(text, x, y_pos);
    letters[index] = y_pos > 100 + Math.random() * 1e4 ? 0 : y_pos + 10;
  });
}
setInterval(drawMatrix, 60);
