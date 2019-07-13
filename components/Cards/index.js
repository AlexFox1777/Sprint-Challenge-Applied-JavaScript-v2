/*
STEP 3: Create Article cards.
-----------------------
Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
Stduy the response data you get back, closely.
You will be creating a component for each 'article' in the list.
This won't be as easy as just iterating over an array though.
Create a function that will programmatically create the following DOM component:

*/

// const cardsContainer = document.querySelector('.cards-container')

/*
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response =>{

        const javascriptCards = response.data.articles.javascript
        // console.log('js test cards', javascriptCards)
        javascriptCards.forEach((n) => {
            console.log('js ', n)
            cardsContainer.appendChild(cards(n))
        })

        const bootstrapCards = response.data.articles.bootstrap
        console.log('bootstrap test cards', bootstrapCards)
        bootstrapCards.forEach((n) => {
            cardsContainer.appendChild(cards(n))
        })
        const technologyCards = response.data.articles.technology
        technologyCards.forEach((n) => {
            cardsContainer.appendChild(cards(n))
        })
        const jqueryCards = response.data.articles.jquery
        jqueryCards.forEach((n) => {
            cardsContainer.appendChild(cards(n))
        })
        const nodeCards = response.data.articles.node
        nodeCards.forEach((n) => {
            cardsContainer.appendChild(cards(n))
        })
    })
    .catch(error =>{
        console.log("Error:", error);
    })



function cards(data) {
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
    headLine.classList.add("headline")
    imgContainer.classList.add("img-container")


    headLine.textContent = data.headline
    img.src = data.authorPhoto
    lastLine.textContent = `By ${data.authorName}`

    return card
}
*/

//second way

const articlesUrl = 'https://lambda-times-backend.herokuapp.com/articles';

axios.get(articlesUrl)
    .then(response =>{
        createCards(response)
    })
    .catch(error =>{
        console.log(error);
    })

function createCards(data) {
    const cardsContainer = document.querySelector('.cards-container')
    for(let tech in data.data.articles){
      /*  console.log("technology: " + tech)
        console.log(data.data.articles[tech])
        need to use bracket notation [tech] ----> why?*/
        let arr = data.data.articles[tech]
        console.log(arr)
        arr.forEach(item => {
            const card = createCard(item.headline, item.authorPhoto, item.authorName)
            cardsContainer.appendChild(card)
        });
    }
}

function createCard(title, url, name) {
    //create elements
    const card = document.createElement("div")
    const headLine = document.createElement("div")
    const author = document.createElement("div")
    const imgContainer = document.createElement("div")
    const img = document.createElement("img")
    const lastLine = document.createElement("span")

    //setup structure of elements
    card.appendChild(headLine)
    card.appendChild(author)

    author.appendChild(imgContainer)
    author.appendChild(lastLine)
    imgContainer.appendChild(img)

    //set class names
    card.classList.add("card")
    headLine.classList.add("headline")
    author.classList.add("author")
    imgContainer.classList.add("img-container")

    //set text content
    headLine.textContent = title
    img.src = url
    lastLine.textContent = `By ${name}`


    return card

}
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
