const form = document.querySelector("form")
const numbers = document.querySelector("#numbers")
const range_from = document.querySelector("#quantity_1")
const range_to = document.querySelector("#quantity_2")
const repeat_number = document.querySelector("#repeat")
const button_submit = document.querySelector("button")
const main_container = document.querySelector(".main-container")
const main_result = document.querySelector(".main-result")
const sort_again = document.querySelector(".play-again")
const number_wrapper = document.querySelector(".wrapper-number")


/* VALIDAÇÃO DE VALORES */
numbers.oninput = () => {
  let value = numbers.value.replace(/\D/g, "")
  numbers.value = value

  if (value > 7) {
    numbers.value = ""
    alert("Selecione um intevalo entre 1 e 5")
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

sort_again.onclick = () => {
  window.location.reload()
}

form.onsubmit = (e) => {
  e.preventDefault()

  let newSort = {
    sort: numbers.value,
    min_value: range_from.value,
    max_value: range_to.value,
    repeat: repeat_number.checked
  }

  const sortedNumbers = sortNumber(newSort)

  if (sortedNumbers != null) {
    for (let i = 0; i < sortedNumbers.length; i++) {
      addNumber(sortedNumbers[i])
    }

    main_container.classList.toggle("display-container-off")
    main_result.classList.toggle("display-result-on")
  }

}

function addNumber(number) {
  let number_inner =
    `
            <div class="inner-number">
              <div class="dice display-dice-animated"></div>
              <h1 class="display-number">${number}</h1>
            </div>
            `
  number_wrapper.innerHTML += number_inner
}

function sortNumber(obj) {
  try {
    const sortList = [];

    const min = parseInt(obj.min_value);
    const max = parseInt(obj.max_value);
    const quantity = parseInt(obj.sort);

    if (min > max) {
      alert("O valor mínimo não pode ser maior que o valor máximo.")
      return null
    }
    if (quantity > (max - min + 1)) {
      alert("O valor de números sorteados não pode ser maior que o intervalo estabelecido")
      return null
    }
    if (quantity > 5) {
      alert("Você pode sortear até 5 números")
      return null
    }

    while (sortList.length < quantity) {
      const number = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!obj.repeat || !sortList.includes(number)) {

        sortList.push(number)
      }
    }
    return sortList;

  } catch (error) {
    alert("Não foi possível realizar a operação, tente novamente mais tarde.")
  }
}







