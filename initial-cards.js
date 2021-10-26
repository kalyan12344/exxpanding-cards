let imgs = document.querySelectorAll(".img");

imgs.forEach(img => {
    img.addEventListener('click',() =>{
        removeActive();
        img.classList.add("active");
        
    })
})
function removeActive(){
    imgs.forEach(img => {
        
            img.classList.remove("active");
        })
   
}


