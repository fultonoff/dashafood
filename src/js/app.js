

if (module.hot) {
    module.hot.accept()
}

const icon = document.querySelectorAll('.icon')



const cir = function(){
  icon.forEach(icon =>{
    
    let randomh = Math.floor(Math.random() * 100) 
    let randomw = Math.floor(Math.random() * 100) 
    icon.style.top = `${+randomh}%`
    icon.style.left = `${+randomw}%`

    
  })

 
}



    setInterval(cir, 2000)
