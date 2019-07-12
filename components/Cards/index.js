// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//

// axios.get("https://lambda-times-backend.herokuapp.com/articles")
//     .then(response =>{
//         console.log(response.data.articles)
//         document.querySelector(".cards-container").appendChild(createCard(response.data.articles))
//
//     })
//     .catch(error =>{
//         console.log("Error:", error);
//     })

const technology = ['bootstrap', 'javascript', 'jquery', 'node', 'technology']
technology.forEach(tech=>{
    axios.get(`https://lambda-times-backend.herokuapp.com/articles/${tech}`)
        .then(response =>{
            console.log(response)
            document.querySelector(".cards-container").appendChild(createCard(response.data.articles))

        })
        .catch(error =>{
            console.log("Error:", error);
        })
})

function createCard(data) {
    //create new elements
    const card = document.createElement("div")
    const headLine = document.createElement("div")
    const author = document.createElement("div")
    const imgContainer = document.createElement("div")
    const img = document.createElement("img")
    const lastLine = document.createElement("span")

    //setup structure of elements
    card.appendChild(headLine)
    card.appendChild(author)
    card.appendChild(lastLine)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)

    //set class names
    card.classList.add("card")
    author.classList.add("author")
    imgContainer.classList.add("img-container")

    //set text content
    // Array.from(data.articles).forEach(article =>{
    //     console.log("Article: " + article)
    // })
/*    headLine.textContent = `${data.articles.bootstrap[0].headline}`
    console.log(`${data.articles.bootstrap[0].headline}`)
    img.textContent = `${data.articles.bootstrap[0].authorPhoto}`
    console.log(`${data.articles.bootstrap[0].authorPhoto}`)
    lastLine.src = `By ${data.articles.bootstrap[0].authorName}`
    console.log(`${data.articles.bootstrap[0].authorName}`)*/

    headLine.textContent = `${data.headline}`
    img.src = `${data.authorPhoto}`
    lastLine.textContent = `By ${data.authorName}`

    return card
}

/*createAllCards() {
    axios.get("https://lambda-times-backend.herokuapp.com/articles")
        .then(response =>{
            const technology = ['bootstrap', 'javascript', 'jquery', 'node', 'technology']
            for(let i =0; i < 5; i++){
                console.log("array " + i)
                for(let j =0; j < 2; j++){
                    console.log(technology[i])
                    headLine.textContent = `${data.technology[i].headline}`
                    console.log(`${data.technology[i].headline}`)
                    img.src = `${data.technology[i].authorPhoto}`
                    console.log(`${data.technology[i].authorPhoto}`)
                    lastLine.textContent = `By ${data.technology[i].authorName}`
                    console.log(`By ${data.technology[i].authorName}`)
                }
            }
            document.querySelector(".cards-container").appendChild(createCard(response.data.articles))

        })
        .catch(error =>{
            console.log("Error:", error);
        })

}*/


// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
