const spanElement = document.querySelectorAll("span");

// biome-ignore lint/complexity/noForEach: <explanation>
spanElement.forEach((item)=>{
    item.addEventListener('click', () =>{
        console.log("item clicked")
        item.classList.toggle("active")
    })
})