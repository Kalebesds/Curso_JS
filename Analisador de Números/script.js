//VARIAVEIS
let numero = document.getElementById("num")
let div = document.getElementById("app")
let sec1  = document.getElementById("sec1")

let number = Number(numero.value)
let list = document.getElementById("lista")
let listArray = []

//LISTA - SELECT
let lista = document.createElement("select")
lista.setAttribute("id", "lista")
lista.setAttribute("class", "form-control")
lista.setAttribute("size", "4")
div.appendChild(lista)


//PARAGRAFO PARA O BOTAO FINALIZAR
let p = document.createElement("p")
div.appendChild(p)

//BOTÃO FINALIZAR
let finish = document.createElement("button")
let txtb = document.createTextNode("Finalizar")
finish.appendChild(txtb)
finish.setAttribute("value", "Verificar")
finish.setAttribute("class", "btn btn-outline-secondary")
finish.setAttribute("onclick", "finalizar()")

p.appendChild(finish)

function inList(n, l) {
  if (l.indexOf(n) != -1) {
   return true
 }
}

function adicionar() {
  
  if (numero.value.length == 0 || numero.value > 100 || numero.value < 0 || inList (numero.value, listArray)) {
    alert("[ERRO] Adcione valores e tente novamente.")
  } else {
    //OPTIONS
    let options = document.createElement("option")
    options.setAttribute("id", "options")
    //options.setAttribute("class", "form-control")
    let texto = document.createTextNode(`${numero.value}`)
    options.appendChild(texto)
    lista.appendChild(options)

    listArray.push(Number(numero.value))
  }
  console.log(listArray)
  numero.value = ""
  numero.focus()
  sec1.removeChild(sec2)
  res.innerHTML = ""
}

function finalizar() {
  if (listArray.length == 0) {
    alert("[ERRO] Adicione valores antes de finalizar.")
  } else {
    let sec2 = document.createElement("section")
    sec2.setAttribute("id", "sec2")
    let res = document.createElement("div")
    res.setAttribute("id", "res")
    let txtR = document.createTextNode("")

    res.appendChild(txtR)
    sec2.appendChild(res)
    sec1.appendChild(sec2)
    
    let tam = listArray.length
    listArray.sort()
    let last = tam - 1
    let soma = 0
    for (let pos in listArray) {
      soma += listArray[pos]
    }
    let media = soma / tam

    if (tam == 0) {
      alert("[ERRO] Adicione valores antes de finalizar.")
    } else {
      
      if (tam < 2) {
        res.innerHTML = ""
        res.innerHTML += `<p>Temos ${tam} valor cadastrado.</p>`
        res.innerHTML += `<p>Insira mais valores para ver mais resultados.</p>`
      } else {
        res.innerHTML = ""
        res.innerHTML += `Ao todo, temos ${tam} valores cadastrados`
        res.innerHTML += `<p>O menor valor informado foi ${listArray[0]}.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${listArray[last]}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores informados é de ${media}.</p>`
      }
    }
  }
}



function enter() {
  let tecla = event.keyCode;

  if (tecla === 13) {
    adicionar();
  }
}
document.addEventListener("keypress", enter)