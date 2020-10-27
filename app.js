const container = document.querySelector('.container');
container.addEventListener('mouseover', () => {
    const newElement = createNewElement('p', 'This is super cool');
    container.appendChild(newElement);
    console.log('I am currently hovering over the container');
})


function createNewElement(tagName, text) {
    const newElement = document.createElement(tagName);
    newElement.textContent = text;
    return newElement;
}