// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics')
const topicsURL = "https://lambda-times-backend.herokuapp.com/topics"

axios.get(topicsURL)
    .then( response =>{
       createTab(response)
    })
    .catch(error => {
        console.log("Error:", error);
    })

function createTab(response){
    response.data.topics.forEach(item =>{
        const tab = document.createElement("div")
        tab.classList.add('tab')
        tab.dataset.tab = item
        tab.textContent = item
        topics.appendChild(tab)
    })
}

//change category

<!-- TABS COMPONENT -->
/*
<div class="tabs">
    <div class="topics">
    <span class="title">TRENDING TOPICS:</span>
<div data-tab="all" class="tab active-tab">ALL</div>
    <div data-tab="javascript" class="tab">JAVASCRIPT</div>
    <div data-tab="technology" class="tab">TECHNOLOGY</div>
    <div data-tab="node" class="tab">NODE.JS</div>
    <div data-tab="jquery" class="tab">jQUERY</div>
    <div data-tab="bootstrap" class="tab">BOOTSTRAP</div>
    </div>
    </div>
*/
class tabLink {
    constructor(tab){
        this.tab = tab
        this.tabData = this.tab.dataset.tab

        this.tab.addEventListener('click', () => )
    }
}
document.querySelectorAll('tab').forEach(tab => tabLink(tab))
