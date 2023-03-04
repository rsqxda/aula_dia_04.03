const botaoContar = document.getElementById("botaoContar")
const inputTexto = document.getElementById("inputTexto")

botaoContar.addEventListener('click', clicou)

// console.log(botaoContar)
// botaoContar.onclick = clicou
// botaoContar.addEventListener('click', clicou)


 function clicou() {
   const texto = inputTexto.value
    
   const palavras = texto.trim().split(" ").length
   
   const letras = texto.replace("", "").split("").length

   resultado.innerText = `O texto tem ${palavras} palavras e ${letras} letras.`
   resultado.classList.add("alert") 
   resultado.classList.add("alert-primary")  
 }


// function meuEvento(texto, funcao) {
//     if(texto === 'click') {
//         funcao('voce clicou')
//     }
// }
// meuEvento('click', clicou)