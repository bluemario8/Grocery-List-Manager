

const strikethroughButtons = document.getElementsByClassName('strikethroughButton');

Array.from(strikethroughButtons).forEach((button) => {
  button.addEventListener('click', () => {

    if (button.style.textDecoration === 'line-through') {
      button.style.textDecoration = ''; 
    } else {
      button.style.textDecoration = 'line-through'; 
    }
  });
});
 