console.log("HELLO WORLD")

const navbarTogglerButton = document.getElementById("navbar-button")

navbarTogglerButton.addEventListener("click",()=>{
    const body = document.body
    console.log(document.body.classList)
    if(body.classList.contains("backdrop")){
        console.log("SHOW")
        body.classList.remove("backdrop")
    }
    else{
        body.classList.add("backdrop")
        console.log("NO SHOW")
    }
})