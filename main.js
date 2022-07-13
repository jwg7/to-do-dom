console.log('test')

////////////////////////////
// query selectors & variables
//////////////////////////////

let form = document.querySelector('#form')
let input1 = document.querySelector('#input1')
let add = document.querySelector('#add')
let remove = document.querySelector('#remove')
let removeAll = document.querySelector('#removeAll')


//////////
// css
///////////

input1.style.width = "351px"
add.style.backgroundColor = 'green'
add.style.color = "white";
remove.style.backgroundColor = '#E1AD01'
removeAll.style.backgroundColor = '#A40000'
removeAll.style.color = 'white'

let list = []

//////////////////
// event listeners
//////////////////

// add button
form.addEventListener('submit', function(event){
event.preventDefault();
// list.push(input1.value)
let div = document.createElement('div');
div.innerHTML = input1.value
document.body.appendChild(div)
div.style.border = "1px solid black"
div.style.width = "351px"
div.style.marginTop = "2px"
list.push(div.innerHTML)
console.log(list)
})


// remove completed tasks
remove.addEventListener('click', function(event){
    event.preventDefault()
})



// remove all 
