const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", () => {
        console.log("estoy arrastrando el parrafo"  + parrafo.innerText)
       parrafo.classList.add("dragging")
       const elemento_fantasma = document.querySelector(".imagen-fantasma")
    event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
    
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        
    })

    seccion.addEventListener("drop", () => {
        console.log("Drop")
       
    })
})