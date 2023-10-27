let menu = document.querySelector(".main .nav .nav-link>i");
let resp = document.querySelector(".nav .res-box");
let cross = document.querySelector(".nav .res-box h1");
menu.addEventListener('click', function(){
    gsap.to(resp, {
        display:"initial"
    })
})

cross.addEventListener('click', function(){
    gsap.to(resp, {
        display:"none"
    })
})
