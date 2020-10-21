function contar() {
  let inicio = document.getElementById("txti")
  let fim = document.getElementById("txtf")
  let passo = document.getElementById("txtp")
  let res = document.getElementById("res")

  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    alert("[ERRO] Confira as informações e tente novamente.")
  } else {
    res.innerHTML = "Contando: "
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `\u{27A1} ${c} `
      }
      res.innerHTML += `\u{1F3F4}`
    } else if (i > f) {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `\u{27A1} ${c} `
      }
      res.innerHTML += `\u{1F3F4}`
    }
  
  }

}




function enter() {
  let tecla = event.keyCode;

  if (tecla === 13) {
    contar();
  }
}
document.addEventListener("keypress", enter)