function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
if(html.classList.contains('light')) {
  img.setAttribute('src', './public/HSM.png')
  }else{
  // se tiver sem light mode, manter a imagem normal
  img.setAttribute('src', './public/HSM-darkmode.png')
  }
}