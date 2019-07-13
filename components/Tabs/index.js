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
       createTabs(response)
        document.querySelectorAll('.tab').forEach(tab => new tabLink(tab))
    })
    .catch(error => {
        console.log("Error:", error);
    })

function createTabs(response){
    createTab('all')
    document.querySelector(".tab").classList.add('active-tab')
    response.data.topics.forEach(item =>{
        console.log("Tab name " + item)
        createTab(item)

    })
}
function createTab(item) {
    const tab = document.createElement("div")
    tab.classList.add('tab')
    tab.dataset.tab = item
    console.log("Data of the tab " + tab.dataset.tab )
    tab.textContent = item
    console.log("Text of the tab " + tab.textContent)
    topics.appendChild(tab)
}


//change category

class tabLink {
    constructor(tab){
        this.tab = tab
        this.tabData = this.tab.dataset.tab
        this.tab.addEventListener('click', () => this.selectTab())
    }
    selectTab(){
        document.querySelectorAll('.tab').forEach(tab =>{
            tab.classList.remove("active-tab")
        })
        this.tab.classList.add("active-tab")
        this.selectCard()
    }
    selectCard(){
        document.querySelectorAll('.card').forEach(card =>{
        card.style.display = 'none'
        })
        if(this.tabData == 'all'){
            document.querySelectorAll('.card').forEach(card =>{
                card.style.display = 'flex'
            })
        }else {
            console.log("DataTab again " + `.card[data-tab='${this.tabData}']`)
            document.querySelectorAll(`.card[data-tab='${this.tabData}']`).forEach(card =>{
                card.style.display = 'flex'
            })
        }
    }


}

