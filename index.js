function addGrocery(data) {
    console.log(data)
    let parent = data.parentNode;
    let textInputValue = parent.getElementsByTagName("input")[0].value;
    let list = document.getElementsByClassName("list-items")[0].children[0];
    let elem = document.createElement("li");
    elem.className = "list-item"; 
    elem.innerHTML = `<button class="strikeButton" onclick="strike(this)">${textInputValue}</button>`
    list.appendChild(elem);
}

function sort(data) {
    console.log(data.value);
}

function strike(data) {
    if (data.style.textDecoration === 'line-through')
        data.style.textDecoration = ''; 
    else 
        data.style.textDecoration = 'line-through'; 
}


const strikethroughButtons = document.getElementsByClassName('strikeButton');

Array.from(strikethroughButtons).forEach((button) => {
    button.onclick = () => {
        if (button.style.textDecoration === 'line-through') {
            button.style.textDecoration = ''
          } else {
            button.style.textDecoration = 'line-through'
          }
    }
})
function filterButtons() {
    const filterValue = document.getElementById('Dropdown').value
    const buttons = document.getElementsByClassName('strikeButton')
    Array.from(buttons).forEach((button) => {
        switch (filterValue) {
            case 'all':
                button.style.display = 'inline-block'
                button.parentElement.style.display = 'list-item'
                break
            case 'struck':
                button.style.display = button.style.textDecoration === 'line-through' ? 'inline-block' : 'none'
                button.parentElement.style.display = button.style.textDecoration === 'line-through' ? 'list-item' : 'none'
                break
            case 'notstruck':
                button.style.display = button.style.textDecoration === '' ? 'inline-block' : 'none';
                button.parentElement.style.display = button.style.textDecoration === '' ? 'list-item' : 'none';
                break
        }
    })
}
