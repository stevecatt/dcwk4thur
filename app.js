let newsList = document.getElementById("newsList")
let newsItemsLI = news.articles.map(function(newsItem){
    console.log(newsItem.title)
    let img = ``

    if(newsItem.urlToImage == null) {
      img = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" />`
    } else {
      img = `<img src='${newsItem.urlToImage}' />`
    }
  
    return `
  <li><h4 class="newsItemTitle"> <a href="${newsItem.url}">${newsItem.title}</a></h4>
  <label class="newsItemAuthor">By: ${newsItem.author}</label>
  <div class="newsItemStory"></div>
    <divclass"newsItemPic>${img}</div>
    <p class="newsItemDescription">${newsItem.description}</p>
    <p class="newsItemPublish">${newsItem.publishedAt}</p></li>`
  })



newsList.innerHTML = newsItemsLI.join(' ')