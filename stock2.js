let userInput = document.getElementById("userInput")
let submitButton = document.getElementById("submit")
let stockContainer = document.getElementById("stocks")
let stockSelection = document.getElementById("selection").value



submitButton.addEventListener('click',function() {
    let stockSelection = document.getElementById("selection").value
    console.log(stockSelection)
    
    window.refreshIntervalId

    let stockChoice = stockSelection

  let stockInfo = `
  <div>
    <label>STOCK NAME</label>
    <p>${quotes[stockChoice].name}</p>
    <label>PRICE</label>
    <p>${quotes[stockChoice].price}</p>
  </div>
  `
  stockContainer.innerHTML = stockInfo
  
  let intervalId= window.setInterval(function() {
    submitButton.addEventListener('click',function() { 
        clearInterval(intervalId)})

        getStockQuote(stockChoice)

  let stockInfo = `
  <div>
    <label>STOCK NAME</label>
    <p>${quotes[stockChoice].name}</p>
    <label>PRICE</label>
    <p>${quotes[stockChoice].price}</p>
  </div>
  `
  
  stockContainer.innerHTML = stockInfo
  },4000)
})

