const forestCard = document.querySelector("#forest-card")
const borrelCard = document.querySelector("#borrel-card")
const draftCard = document.querySelector("#draftSMP")

draftCard.addEventListener("click",() =>{
    window.open('https://draftsmp.netlify.app/', '_blank')
})
borrelCard.addEventListener("click",() =>{
    window.open('https://borrelsmp.netlify.app/', '_blank')
})
forestCard.addEventListener("click", () => {
    window.open('https://forrestsmp.netlify.app/', '_blank')
})