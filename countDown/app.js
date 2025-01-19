const endDate = "20 August 2025 12:00 AM";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
function clock() {
  const then = new Date(endDate);
  const now = new Date();
  diff = Math.floor((then - now) / 1000);
  if (diff >= 0) {
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor((diff / 3600) % 24);
    inputs[2].value = Math.floor((diff / 60) % 60);
    inputs[3].value = Math.floor(diff % 60);
  } else {
    console.log("ENDED");
  }
}
setInterval(() => {
  clock();
}, 1000);

clock();
