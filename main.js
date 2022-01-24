
const inputBtn = document.querySelector("#input-btn")
let inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
let myLeads = []
const deleteBtn = document.querySelector("#delete-btn")


//retreiving local storage leads
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener('dblclick', function() {
    myLeads = []
    renderLeads()
    localStorage.clear()
 console.log("double clicked")
})

//click function, pushing lead to array, saving to local storage and converting to string
inputBtn.addEventListener('click', function() {
myLeads.push(inputEl.value)
inputEl.value = ""
localStorage.setItem("myLeads", JSON.stringify(myLeads))
renderLeads()
})

//create a for loop that places your leads into a unordered list beneath your start button
function renderLeads () {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i ++) {
    listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'> 
                ${myLeads[i]}
            </a>
        </li>
    `
}
ulEl.innerHTML = listItems
}



