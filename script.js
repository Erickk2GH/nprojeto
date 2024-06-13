function toggleMode() {
   const html = document.documentElement

   
   if (html.classList.contains ('light')) {
    html.classList.remove ('light')
   } else {
     html.classList.add ('light')
   }

   const img = document.querySelector("#profile img")

   if(html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Screenshot_35.png")
   } else {
    img.setAttribute("src", "./assets/Screenshot_32.png")
   }
}