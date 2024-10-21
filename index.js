function addGrocery(data) {
    console.log(data)
    let parent = data.parentNode;
    let textInputValue = parent.getElementsByTagName("input")[0].value;
    let list = document.getElementsByClassName("list-items")[0].children[0];
    let elem = document.createElement("li");
    elem.className = "list-item"; 
    elem.innerHTML = `<button class="strikethroughButton" onclick="strike(this)">${textInputValue}</button>`
    list.appendChild(elem);
}

function sort(data) {
    console.log(data.value);
}

let strikethroughButtons = document.getElementsByClassName('strikethroughButton');

function strike(data) {
    if (data.style.textDecoration === 'line-through')
        data.style.textDecoration = ''; 
    else 
        data.style.textDecoration = 'line-through'; 
}


// Array.from(strikethroughButtons).forEach((button) => {
//   button.addEventListener('click', () => {
//     console.log(strikethroughButtons);
//     console.log(button);

//     if (button.style.textDecoration === 'line-through') {
//       button.style.textDecoration = ''; 
//     } else {
//       button.style.textDecoration = 'line-through'; 
//     }
//   });
// });
 
