document.getElementById("hamm").addEventListener('click', function(){
   const navbar = document.getElementById('navbar')
   navbar.style.display = 'block'

   const hamburger  = document.getElementById('hamburger')
   hamburger.style.display = 'none'

})

document.getElementById('closed').addEventListener('click', function(){
    const navbar = document.getElementById('navbar')
   navbar.style.display = 'none'

   const hamburger  = document.getElementById('hamburger')
   hamburger.style.display = 'block'
})