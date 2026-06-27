const button = document.querySelector(".button");
const text = document.getElementById("text");


button.addEventListener("click", () => {
 button.classList.add("progress");
 text.innerText = "Downloading...";
 
 setTimeout(() => {
  button.classList.remove("progress");
 text.innerText = "Downloaded";
 },6000)
})