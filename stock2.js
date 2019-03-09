let userInput = document.getElementById("userInput")
let submitButton = document.getElementById("submit")
let stockContainer = document.getElementById("stocks")
//let stockSelection = document.getElementById("selection").value
// this "stochChoice is  a parameter  and needs to permeate throught the function "
function displayStocks(stockChoice){
    let stockInfo = `
    <div>
      <label>STOCK NAME</label>
      <p>${quotes[stockChoice].name}</p>
      <label>PRICE</label>
      <p>${quotes[stockChoice].price}</p>
    </div>
    `
    stockContainer.innerHTML = stockInfo
  }
//this function uses the direct return from the getstockchoice function
  function displayAltVersion(dog){
      let stockInfo= `
      <div>
      <label>Stock Name</label>
      <span>${dog.name}</span>
      <span>${dog.price}</span>
      `
      stockContainer.innerHTML=stockInfo
  }


submitButton.addEventListener('click',function() {
    let stockSelection = document.getElementById("selection").value
    console.log(stockSelection)
    
   
//this stockchoive is an argumant"
    //let stockChoice = stockSelection
   //stockchoice is now the argument passed into the getstockquote function
    let updatedStock = getStockQuote(stockSelection)
    //shows that i dont need to go to quotes  object to get the data 
    console.log(updatedStock)
    console.log(updatedStock.name)
    console.log(updatedStock.price)
    displayStocks(stockSelection)

  
  let intervalId= window.setInterval(function() {
    submitButton.addEventListener('click',function() { 
        clearInterval(intervalId)})

        getStockQuote(stockSelection)
        displayStocks(stockSelection)
        //displayAltVersion(updatedStock)

  
  },1000)
})

