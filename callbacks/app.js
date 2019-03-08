
// set timeout

//window.setTimeout(function name, time in milliseconds) and //// window.setTimeout is called ONCE



//window.setTimeout(greet,5000)

window.setTimeout(function() {
  console.log("Hello!")
},5000)

let count = 1

let intervalId = window.setInterval(function(){
    console.log("Get Bitcoin Updated Price....")
    if(count == 5) {
      window.clearInterval(intervalId)
    }
  count++
},5000)

// Callbacks


function greet(callback) {
  callback()
  //console.log(callback)
}

function sayhello() {
  console.log("sayHello Fired....")
}

//greet(sayHello)


function add(a,b,callback) {

  // do some time consuming thing

  // more time consuming thing

  callback(a+b)

}

add(5,6,function(result) {
  console.log(result)
})


/*
function getDataFromNasa() {

  let data = []

  // get the data back from NASA which will take 5 seconds
  window.setTimeout(function() {
    data = [232,45.67,45.67,345.67]
  },5000)

  return data

} */

function getDataFromNasa(dataDownloaded) {

  let data = []

  // get the data back from NASA which will take 5 seconds
  window.setTimeout(function() {

    data = [232,45.67,45.67,345.67]
    dataDownloaded(data)

  },5000)

  //dataDownloaded(data)
}

getDataFromNasa(function(result){
  console.log("Received Data from NASA")
  console.log(result)
})

//console.log(latestData)





/*
greet(function(name) {
  console.log("Hello John!!!")
}) */
