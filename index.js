

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
                break
            case 'struck':
                button.style.display = button.style.textDecoration === 'line-through' ? 'inline-block' : 'none'
                break
            case 'notstruck':
                button.style.display = button.style.textDecoration === '' ? 'inline-block' : 'none';
                break
        }
    })
}