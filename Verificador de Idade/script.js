function age() {
  let nasc = document.getElementById("nasc")
  let img = document.getElementById("img")
  let res = document.getElementById("res")
  let sexo = document.getElementsByName("genero")
  let data = new Date()
  let ano = data.getFullYear()
  let idade = ano - Number(nasc.value)

  if (nasc.value.length == 0 || nasc.value > ano) {
    alert("[ERRO] Confira os dados e tente novamente.")
  }
  else {
    // HOMEM
    if (sexo[0].checked && idade < 10) {
      res.innerHTML = `Identificamos um homem de ${idade} anos.`
      img.src = "./images/boy8.png"
      document.body.style.backgroundColor = "#0a1e55"
    } else if (sexo[0].checked && idade < 18) {
      res.innerHTML = `Identificamos um homem de ${idade} anos.`
      img.src = "./images/teenboy.png"
      document.body.style.backgroundColor = "#0a1e55"
    } else if (sexo[0].checked && idade < 40) {
      res.innerHTML = `Identificamos um homem de ${idade} anos.`
      img.src = "./images/man22.png"
      document.body.style.backgroundColor = "#0a1e55"
    } else if (sexo[0].checked && idade < 60) {
      res.innerHTML = `Identificamos um homem de ${idade} anos.`
      img.src = "./images/man55.png"
      document.body.style.backgroundColor = "#0a1e55"
    } else if (sexo[0].checked && idade > 80) {
      res.innerHTML = `Identificamos um homem de ${idade} anos.`
      img.src = "./images/man70.png"
      document.body.style.backgroundColor = "#0a1e55"


      // MULHER
    } else if (sexo[1].checked && idade < 10) {
      res.innerHTML = `Identificamos uma mulher de ${idade} anos.`
      img.src = "./images/girl8.png"
      document.body.style.backgroundColor = "#e42c2c"
    } else if (sexo[1].checked && idade < 18) {
      res.innerHTML = `Identificamos uma mulher de ${idade} anos.`
      img.src = "./images/teengirl.png"
      document.body.style.backgroundColor = "#e42c2c"
    } else if (sexo[1].checked && idade < 40) {
      res.innerHTML = `Identificamos uma mulher de ${idade} anos.`
      img.src = "./images/woman22.png"
      document.body.style.backgroundColor = "#e42c2c"
    } else if (sexo[1].checked && idade < 60) {
      res.innerHTML = `Identificamos uma mulher de ${idade} anos.`
      img.src = "./images/woman55.png"
      document.body.style.backgroundColor = "#e42c2c"
    } else if (sexo[1].checked && idade > 80) {
      res.innerHTML = `Identificamos uma mulher de ${idade} anos.`
      img.src = "./images/woman70.png"
      document.body.style.backgroundColor = "#e42c2c"
    }
  }
  nasc.value = ""
  nasc.focus()
}

function enter() {
  let tecla = event.keyCode;

  if (tecla === 13) {
    age();
  }
}
document.addEventListener("keypress", enter)