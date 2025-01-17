function submit_btn() {
  let col = "0123456789abcdef";
  let code = "#";
  for (let i = 0; i < 6; i++) {
    code = code + col[Math.floor(Math.random() * 16)];
  }
  const background = document.querySelector(".body");

  background.style.backgroundColor = code;
  document.getElementById("color_code").innerText = code;
}
