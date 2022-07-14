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

input1.style.width = "351px"
add.style.backgroundColor = 'green'
add.style.color = "white";
remove.style.backgroundColor = '#E1AD01'
removeAll.style.backgroundColor = '#A40000'
removeAll.style.color = 'white'


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
    })
    // add item to ul
    document.body.appendChild(listItem);
    // clear out our input text when we add items to the list
    input1.value = ''
    // adds CSS to every added item to the list
    listItem.style.border = '1px solid black'
    listItem.style.width = "351px"
    listItem.style.marginTop = "2px"
})

////////////////////////////////////////////

// remove completed tasks
remove.addEventListener('click', function (event) {
    event.preventDefault()
    let listAll = document.querySelectorAll('div')
    console.log(listAll)
    for (let item of listAll) {
        if (item.style.textDecoration === 'line-through') {
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