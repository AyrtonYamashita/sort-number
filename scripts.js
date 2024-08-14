const form = document.querySelector("form")
const numbers = document.querySelector("#numbers")
const range_from = document.querySelector("#quantity_1")
const range_to = document.querySelector("#quantity_2")
const repeat_number = document.querySelector("repeat")
const button_submit = document.querySelector("button")

form.onsubmit = (e) => {
  e.preventDefault()

}


/* VALIDAÇÃO DE VALORES */
numbers.oninput = () => {
  let value = numbers.value.replace(/\D/g, "")
  numbers.value = value

  if (value > 9) {
    numbers.value = ""
    alert("Selecione um intevalo entre 1 e 9")
  }
  if (value < 1 && !value == "") {
    numbers.value = ""
    alert("Selecione um valor acima de 0")
  }
}

range_from.oninput = () => {
  let value = range_from.value.replace(/\D/g, "")
  range_from.value = value

  if (value > 999) {
    range_from.value = ""
    alert("Selecione um intevalo entre 1 e 9")
  }
  if (value < 1 && !value == "") {
    range_from.value = ""
    alert("Selecione um valor acima de 0")
  }
}

range_to.oninput = () => {
  let value = range_to.value.replace(/\D/g, "")
  range_to.value = value

  if (value > 999) {
    range_to.value = ""
    alert("Selecione um intevalo entre 1 e 9")
  }
  if (value < 1 && !value == "") {
    range_to.value = ""
    alert("Selecione um valor acima de 0")
  }
}

