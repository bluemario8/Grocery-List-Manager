

const strikethroughButtons = document.getElementsByClassName('strikeButton');

Array.from(strikethroughButtons).forEach((button) => {
    button.onclick = () => {
        if (button.style.textDecoration === 'line-through') {
            button.style.textDecoration = ''; 
          } else {
            button.style.textDecoration = 'line-through'; 
          }
    }
})

 