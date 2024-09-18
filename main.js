document.querySelectorAll('.clickable-div').forEach((element) => {
    element.addEventListener('click', () => console.log('cliccato', element.id));
});



