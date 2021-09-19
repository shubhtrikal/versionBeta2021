let updown= document.querySelector('.up-down')
updown.addEventListener('click',function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behaviour: "smooth"
    })
})