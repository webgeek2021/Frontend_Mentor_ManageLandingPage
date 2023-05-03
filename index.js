console.log("HELLO WORLD")

window.addEventListener("load",()=>{

    const slickDotsChildren = document.getElementsByClassName("slick-dots")[0].children
    
    console.log(slickDotsChildren)
    
    for(let i= 0 ;i<slickDotsChildren.length ; i++){
        // console.log()
        slickDotsChildren[i].children[0].innerHTML = ""
    }
})

const navbarTogglerButton = document.getElementById("navbar-button")
const humburgerMenu = document.getElementById("navbar-button")

humburgerMenu.addEventListener("click",()=>{
    if(humburgerMenu.classList.contains("animate-humberger")){
        humburgerMenu.classList.remove("animate-humberger")
    }
    else{
        humburgerMenu.classList.add("animate-humberger")
    }
})
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
