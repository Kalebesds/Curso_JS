function hora() {
  let txt = document.querySelector("#txtHora")
  let good = document.querySelector("#txtg")
  let img = document.querySelector("img")
  let data = new Date()
  let horas = data.getHours()

  if (horas < 3) {
    good.innerHTML = `Boa Madrugada`
    txt.innerHTML = `Agora são ${horas} hrs.`
    img.src = "./images/noite.png"
    document.body.style.background = ' #0a1e55'
    document.body.style.color = 'white'
  } else if (horas < 13) {
    good.innerHTML = `Bom Dia`
    txt.innerHTML = `Agora são ${horas} hrs.`
    img.src = "./images/manha.png"
    document.body.style.background = '#fdf253'
    document.body.style.color = 'black'
  } else if (horas < 19) {
    good.innerHTML = `Boa Tarde`
    txt.innerHTML = `Agora são ${horas} hrs.`
    img.src = "./images/tarde.png"
    document.body.style.background = ' #e6800b'
  } else {
    good.innerHTML = `Boa Noite`
    txt.innerHTML = `Agora são ${horas} hrs.`
    img.src = "./images/noite.png"
    document.body.style.background = ' #0a1e55'
    document.body.style.color = 'white'
  }
}
hora()