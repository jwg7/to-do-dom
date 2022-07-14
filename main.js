console.log('test')

////////////////////////////
// query selectors & variables
//////////////////////////////

let form = document.querySelector('#form')
let input1 = document.querySelector('#input1')
let add = document.querySelector('#add')
let remove = document.querySelector('#remove')
let removeAll = document.querySelector('#removeAll')

// alternate way
// let body = document.querySelector("body")


//////////
// css
///////////

input1.style.width = "500px"
input1.style.height = "30px"
input1.style.fontSize = '25px'
add.style.backgroundColor = 'green'
add.style.color = "white";
add.style.height = '40px';
add.style.fontSize = '20px'
remove.style.backgroundColor = '#E1AD01'
remove.style.height = "40px"
remove.style.fontSize = '20px'
removeAll.style.backgroundColor = '#A40000'
removeAll.style.color = 'white';
removeAll.style.height = '40px';
removeAll.style.fontSize = '20px'
document.body.style.backgroundColor = 'black'

// puts everything in the center of the page
document.body.style.textAlign = 'center'

//////////////////
// event listeners
//////////////////

// add button
// form.addEventListener('submit', function(event){
// event.preventDefault();
// let div = document.createElement('div');
// div.innerHTML = input1.value
// document.body.appendChild(div)
// div.style.border = "1px solid black"
// div.style.width = "351px"
// div.style.marginTop = "2px"
// })


//alternate way
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // create new element
    let listItem = document.createElement('div');
    //set the text of the newly created element
    listItem.innerText = input1.value;
    //  allows us to click items and put a line through them
    listItem.addEventListener('click', function () {
        console.log(listItem.innerText)
        if (listItem.style.textDecoration === '') {
            listItem.style.textDecoration = 'line-through'
        } else { listItem.style.textDecoration = '' }
        listItem.style.textDecorationColor = "red"
    })
    // add item to document
    document.body.appendChild(listItem);
    // clear out our input text when we add items to the list
    input1.value = ''
    // adds CSS to every added item to the list
    listItem.style.marginLeft = 'auto';
    listItem.style.marginRight = 'auto';
    listItem.style.height = '40px'
    listItem.style.fontSize = '30px'
    listItem.style.border = '1px solid black'
    listItem.style.width = "500px"
    listItem.style.marginTop = "2px"
    listItem.style.color = "white"
})

////////////////////////////////////////////

// remove completed tasks
remove.addEventListener('click', function (event) {
    event.preventDefault()
    console.log('click')
    let listAll = document.querySelectorAll('div')
    console.log(listAll)
        for (let item of listAll) {
            // I have to change this because my color was red!!!!
            if (item.style.textDecorationColor === 'red') {
                item.remove();
            }
        }
})


// remove all 
removeAll.addEventListener('click', function (event) {
    event.preventDefault()
    console.log('click!')
    let listAll1 = document.querySelectorAll('div');
    console.log(listAll1)
    for (let item of listAll1) {
        item.remove();
    }
})