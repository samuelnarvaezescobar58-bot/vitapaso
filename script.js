let completed = 0
let total = 6

function toggleHabit(card){

if(!card.classList.contains("completed")){

card.classList.add("completed")

completed++

updateProgress()

}

}

function updateProgress(){

let percent = (completed/total)*100

document.getElementById("progressFill").style.width = percent+"%"

document.getElementById("progressText").innerText = completed+"/"+total

if(completed >= 4){

document.getElementById("assistantText").innerText =
"¡Excelente progreso! Ya casi completas tus hábitos 🌟"

}

}



function sendMessage(){

let input=document.getElementById("userInput")

let text=input.value

if(text==="") return

addMessage(text,"user")

let response=generateResponse(text)

setTimeout(()=>{

addMessage(response,"bot")

},500)

input.value=""

}



function addMessage(text,type){

let div=document.createElement("div")

div.innerText=text

div.className = type==="user" ? "messageUser" : "messageBot"

document.getElementById("chatMessages").appendChild(div)

}



function generateResponse(text){

text=text.toLowerCase()

if(text.includes("ejercicio"))

return "Puedes caminar, estirar o hacer 20 minutos de actividad física."

if(text.includes("dieta") || text.includes("comer"))

return "Intenta incluir frutas, verduras y buena hidratación."

if(text.includes("estres"))

return "La respiración profunda y la meditación ayudan mucho."

return "Estoy aquí para ayudarte a mejorar tus hábitos saludables."
}