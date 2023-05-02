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
