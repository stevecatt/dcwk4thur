
let menuUL = document.getElementById("menu")
let dessertsButton = document.getElementById("dessertsButton")

dessertsButton.addEventListener('click',function() {

  /*
  let desserts = dishes.filter(function(dish) {
      return dish.course == "Desserts"
  }) */

  let desserts = filterByCourse("Desserts")
  displayDishes(desserts)
})

startersButton.addEventListener('click',function() {

  /*
  let starters = dishes.filter(function(dish) {
      return dish.course == "Starters"
  }) */

  let starters = filterByCourse("Starters")
  displayDishes(starters)
})


function filterByCourse(course) {

  if(course == "All") {
    return dishes
  }

  return dishes.filter(function(dish) {
      return dish.course == course
  })

}

function displayDishes(dishesToDisplay) {

  let dishLIItems = dishesToDisplay.map(function(dish) {
    return `<li>
              <img class="dish-photo" src='${dish.imageURL}'></img>
              <b>${dish.title}</b>
              <p>${dish.description}</p>
              <h1>${dish.price}</h1>
            </li>`
  })

  menuUL.innerHTML = dishLIItems.join('')

}

displayDishes(dishes)
