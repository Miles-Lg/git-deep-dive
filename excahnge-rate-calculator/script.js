const currency_one = document.getElementById("currency-one")
const currency_two = document.getElementById("currency-two")
const amount_one = document.getElementById("amount-one")
const amount_two = document.getElementById("amount-two")

const swap = document.getElementById("swap")
const rate = document.getElementById("rate")


// Fetch exchange rate and update the DOM
function calculateRate() {
  const currencyOne = currency_one.value
  const currencyTwo = currency_two.value

  fetch(`https://v6.exchangerate-api.com/v6/d3918778d0d561a1b01100cc/latest/${currencyOne}`)
    .then(res => res.json())
    .then(data => {

      if (data.result !== "success") {
        rate.textContent = "Error while loading data."
        return
      }

      const rateCurrency = data.conversion_rates[currencyTwo]
      rate.textContent = `1 ${currencyOne} = ${rateCurrency} ${currencyTwo}`

      amount_two.value = (amount_one.value * rateCurrency).toFixed(2)
    })
    .catch(error => {
      console.error(error)
      rate.textContent = "Impossible to get rate exchange."
    })
}


// Event listeners
currency_one.addEventListener("change", calculateRate)
amount_one.addEventListener("input", calculateRate)
amount_two.addEventListener("input", calculateRate)


swap.addEventListener("click", () => {
  const temp = currency_one.value

  currency_one.value = currency_two.value
  currency_two.value = temp

  calculateRate()
})


calculateRate()