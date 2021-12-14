const searchOptionContainer = document.getElementById('search-option-container');
const searchBar = document.getElementById('search-bar');
const searchOptionCloseButton = document.getElementById('search-option-close-button');
const searchBarInput = document.getElementById('search-bar-input');
const searchNote = document.getElementById('search-note');
const body = document.getElementById('body');
const navSearchIcon = document.getElementById('nav-search-icon');
const shoppingCart = document.getElementById('shopping-cart');
const jsMiniCart = document.getElementById('js-minicart');
const miniCartHeadCloseButton = document.getElementById('mini-cart-head-close-button');
console.log(miniCartHeadCloseButton);

navSearchIcon.addEventListener('click', () => {
    searchOptionContainer.style.height = '80vh';
    searchOptionCloseButton.style.display = 'inline';
    searchBar.classList.add('search-bar-animation');
    body.style.opacity = '0.7'; 
})

searchOptionCloseButton.addEventListener('click', () => {
    searchOptionContainer.style.height = '0vh';
    searchOptionCloseButton.style.display = 'none';
    searchBar.classList.remove('search-bar-animation');
    body.style.opacity = '1';
})

shoppingCart.addEventListener('click', () => {
    jsMiniCart.style.right =  '0';
    body.style.opacity = '0.7';
})

miniCartHeadCloseButton.addEventListener('click', () => {
    jsMiniCart.style.right = '-380px';
    body.style.opacity = '1';
 })

window.addEventListener('keyup', () => {
    if(searchBarInput.value.length < 2) {
        searchNote.innerHTML = 'You must enter at least 2 characters';
    } else {
        searchNote.innerHTML = 'No result found for your search';
    }
})

body.onclick = function(event) {
    if(event.target != navSearchIcon && event.target != shoppingCart){
        searchOptionContainer.style.height = '0vh';
        searchOptionCloseButton.style.display = 'none';
        searchBar.classList.remove('search-bar-animation');
        body.style.opacity = '1';
        jsMiniCart.style.right = '-380px';
    }
}