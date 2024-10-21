function addGrocery(data) {
    let parent = data.parentNode;
    let textInputValue = parent.getElementsByTagName("input")[0].value;
    let list = document.getElementsByClassName("list-items")[0].children[0];
    let elem = document.createElement("li");
    elem.className = "list-item"; 
    elem.innerHTML = `<span>${textInputValue}</span>`
    list.appendChild(elem);
}