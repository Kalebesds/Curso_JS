function tabuada() {
  let number = document.getElementById("num")
  let txtRes = document.getElementById("txtRes")
  let div = document.getElementById("res")

  
  if (number.value.length == 0) {
    alert("[ERRO] Confira os dados e tente novamente.")
  } else {
    let tab = document.createElement("select")
    tab.setAttribute("id", "selTab")
    div.appendChild(tab)
    
    let n = Number(number.value)
    for (let c = 1; c <= 10; c++) {
      tab.setAttribute("size", "10")
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n * c}`
      item.value = `tab${c}`
      tab.appendChild(item)
      txtRes.innerHTML =""
    }
  }
  number.focus()
}




function enter() {
  let tecla = event.keyCode;

  if (tecla === 13) {
    tabuada();
  }
}
document.addEventListener("keypress", enter)