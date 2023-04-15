const message = document.getElementById("evaluatedText");
const count = document.getElementById("letterCount");
count.textContent = "0";

message.addEventListener("input",()=>{
	count.textContent = message.value.trim().length;
});