const form = document.querySelector("#form")
const entrada= document.getElementById("tarea")
const lista = document.getElementById("lista")

form.addEventListener("submit",(evento)=>{
    evento.preventDefault()
    console.log(entrada.value)
})
