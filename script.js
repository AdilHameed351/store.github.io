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
const navPopupLogin = document.getElementById('nav-popup-login');
const popupLoginDesktop = document.getElementById('popup-login-desktop');
const popupLoginCloseButton = document.getElementById('popup-login-close-button');
let menuListOptions = document.getElementsByClassName('menu-list-options');
const menuListVeganPizzas = document.getElementById('menu-list-vegan-pizzas');
const menuListPizzas = document.getElementById('menu-list-pizzas');
const menuListDrinks = document.getElementById('menu-list-drinks');
const menuListSalads = document.getElementById('menu-list-salads');
const menuListPides = document.getElementById('menu-list-pides');
const menuListSides = document.getElementById('menu-list-sides');
const menuListWraps = document.getElementById('menu-list-wraps');
const menuListKidsMeal = document.getElementById('menu-list-kids-meal');
const menuListBistroSetMeals = document.getElementById('menu-list-bistro-set-meals');
const menuLlistCombos = document.getElementById('menu-list-combos');
const menuCartRow1 = document.getElementById('menu-cart-row1');
const menuCartRow2 = document.getElementById('menu-cart-row2');
const menuCartRow3 = document.getElementById('menu-cart-row3');
const menuCartRow4 = document.getElementById('menu-cart-row4');
const menuCartRow5 = document.getElementById('menu-cart-row5');
const menuCartRow6 = document.getElementById('menu-cart-row6');
const menuCartRow7 = document.getElementById('menu-cart-row7');
const menuCartRow8 = document.getElementById('menu-cart-row8');
const menuCartRow9 = document.getElementById('menu-cart-row9');
const menuCartRow10 = document.getElementById('menu-cart-row10');
const menuCartRow11 = document.getElementById('menu-cart-row11');
const menuCartRow12 = document.getElementById('menu-cart-row12');
const menuCartRow13 = document.getElementById('menu-cart-row13');
const menuCartRow14 = document.getElementById('menu-cart-row14');
const prevSlideButton = document.getElementById('prev-slide-button');
const nextSlideButton = document.getElementById('next-slide-button');
const draggable = document.getElementById('draggable');


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

navPopupLogin.addEventListener('click', () => {
    popupLoginDesktop.style.transform = 'scale(1)';
    popupLoginDesktop.style.transition = 'all .5s';
    body.style.opacity = '0.7';
    
})

popupLoginCloseButton.addEventListener('click', () => {
    popupLoginDesktop.style.transform = 'scale(0)';
    popupLoginDesktop.style.transition = 'none';
    body.style.opacity = '1';
})

for(let i = 0; i < menuListOptions.length; i++) {
    menuListOptions[i].onclick = function () {
        //remove class from the sibling
        let el = menuListOptions[0];
        while(el) {
            if(el.tagName === "LI") {
                //remove class
                el.classList.remove('active');
            }
            //pass to the next sibling
            el = el.nextSibling;
        }

        //Add class to the required element
        this.classList.add("active");
    }
}

menuListVeganPizzas.addEventListener('click', () => {
    menuCartRow1.style.display = 'flex';
    menuCartRow2.style.display = 'none';
    menuCartRow3.style.display = 'none';
    menuCartRow4.style.display = 'none';
    menuCartRow5.style.display = 'none';
    menuCartRow6.style.display = 'none';
    menuCartRow7.style.display = 'none';
    menuCartRow8.style.display = 'none';
    menuCartRow9.style.display = 'none';
    menuCartRow10.style.display = 'none';
    menuCartRow11.style.display = 'none';  
    menuCartRow12.style.display = 'none';
    menuCartRow13.style.display = 'none';
    menuCartRow14.style.display = 'none';
})

menuListPizzas.addEventListener('click', () => {
    menuCartRow2.style.display = 'flex';
    menuCartRow3.style.display = 'flex';
    menuCartRow4.style.display = 'flex';
    menuCartRow1.style.display = 'none';
    menuCartRow5.style.display = 'none';
    menuCartRow6.style.display = 'none';
    menuCartRow7.style.display = 'none';
    menuCartRow8.style.display = 'none';
    menuCartRow9.style.display = 'none';
    menuCartRow10.style.display = 'none';
    menuCartRow11.style.display = 'none';  
    menuCartRow12.style.display = 'none';
    menuCartRow13.style.display = 'none';
    menuCartRow14.style.display = 'none';
})


menuListDrinks.addEventListener('click', () => {
    menuCartRow5.style.display = 'flex';
    menuCartRow6.style.display = 'flex';
    menuCartRow1.style.display = 'none';
    menuCartRow2.style.display = 'none';
    menuCartRow3.style.display = 'none';
    menuCartRow4.style.display = 'none';
    menuCartRow7.style.display = 'none';
    menuCartRow8.style.display = 'none';
    menuCartRow9.style.display = 'none';
    menuCartRow10.style.display = 'none';
    menuCartRow11.style.display = 'none'; 
    menuCartRow12.style.display = 'none'; 
    menuCartRow13.style.display = 'none';
    menuCartRow14.style.display = 'none';
})

menuListSalads.addEventListener('click', () => {
    menuCartRow7.style.display = 'flex';
    menuCartRow1.style.display = 'none';
    menuCartRow2.style.display = 'none';
    menuCartRow3.style.display = 'none';
    menuCartRow4.style.display = 'none';
    menuCartRow5.style.display = 'none';
    menuCartRow6.style.display = 'none';
    menuCartRow8.style.display = 'none';
    menuCartRow9.style.display = 'none';
    menuCartRow10.style.display = 'none';
    menuCartRow11.style.display = 'none';  
    menuCartRow12.style.display = 'none';
    menuCartRow13.style.display = 'none';
    menuCartRow14.style.display = 'none';
})

menuListPides.addEventListener('click', () => {
    menuCartRow8.style.display = 'flex';
    menuCartRow1.style.display = 'none';
    menuCartRow2.style.display = 'none';
    menuCartRow3.style.display = 'none';
    menuCartRow4.style.display = 'none';
    menuCartRow5.style.display = 'none';
    menuCartRow6.style.display = 'none';
    menuCartRow7.style.display = 'none';
    menuCartRow9.style.display = 'none';
    menuCartRow10.style.display = 'none'; 
    menuCartRow11.style.display = 'none';  
    menuCartRow12.style.display = 'none';
    menuCartRow13.style.display = 'none';
    menuCartRow14.style.display = 'none';
})

menuListSides.addEventListener('click', () => {
    menuCartRow9.style.display = 'flex';
    menuCartRow10.style.display = 'flex';
    menuCartRow1.style.display = 'none';
    menuCartRow2.style.display = 'none';
    menuCartRow3.style.display = 'none';
    menuCartRow4.style.display = 'none';
    menuCartRow5.style.display = 'none';
    menuCartRow6.style.display = 'none';
    menuCartRow7.style.display = 'none';
    menuCartRow8.style.display = 'none';
    menuCartRow11.style.display = 'none';
    menuCartRow12.style.display = 'none';
    menuCartRow13.style.display = 'none';
    menuCartRow14.style.display = 'none';
})

menuListWraps.addEventListener('click', () => {
    menuCartRow11.style.display = 'flex';
    menuCartRow1.style.display = 'none';
    menuCartRow2.style.display = 'none';
    menuCartRow3.style.display = 'none';
    menuCartRow4.style.display = 'none';
    menuCartRow5.style.display = 'none';
    menuCartRow6.style.display = 'none';
    menuCartRow7.style.display = 'none';
    menuCartRow8.style.display = 'none';
    menuCartRow9.style.display = 'none';
    menuCartRow10.style.display = 'none';
    menuCartRow12.style.display = 'none';
    menuCartRow13.style.display = 'none';
    menuCartRow14.style.display = 'none';
})

menuListKidsMeal.addEventListener('click', () => {
    menuCartRow12.style.display = 'flex';
    menuCartRow1.style.display = 'none';
    menuCartRow2.style.display = 'none';
    menuCartRow3.style.display = 'none';
    menuCartRow4.style.display = 'none';
    menuCartRow5.style.display = 'none';
    menuCartRow6.style.display = 'none';
    menuCartRow7.style.display = 'none';
    menuCartRow8.style.display = 'none';
    menuCartRow9.style.display = 'none';
    menuCartRow10.style.display = 'none';
    menuCartRow11.style.display = 'none';
    menuCartRow13.style.display = 'none';
    menuCartRow14.style.display = 'none';
})

menuListBistroSetMeals.addEventListener('click', () => {
    menuCartRow13.style.display = 'flex';
    menuCartRow1.style.display = 'none';
    menuCartRow2.style.display = 'none';
    menuCartRow3.style.display = 'none';
    menuCartRow4.style.display = 'none';
    menuCartRow5.style.display = 'none';
    menuCartRow6.style.display = 'none';
    menuCartRow7.style.display = 'none';
    menuCartRow8.style.display = 'none';
    menuCartRow9.style.display = 'none';
    menuCartRow10.style.display = 'none';
    menuCartRow11.style.display = 'none';
    menuCartRow12.style.display = 'none';
    menuCartRow14.style.display = 'none';
})

menuLlistCombos.addEventListener('click', () => {
    menuCartRow14.style.display = 'flex';
    menuCartRow1.style.display = 'none';
    menuCartRow2.style.display = 'none';
    menuCartRow3.style.display = 'none';
    menuCartRow4.style.display = 'none';
    menuCartRow5.style.display = 'none';
    menuCartRow6.style.display = 'none';
    menuCartRow7.style.display = 'none';
    menuCartRow8.style.display = 'none';
    menuCartRow9.style.display = 'none';
    menuCartRow10.style.display = 'none';
    menuCartRow11.style.display = 'none';
    menuCartRow12.style.display = 'none';
    menuCartRow13.style.display = 'none';
})

window.addEventListener('keyup', () => {
    if(searchBarInput.value.length < 2) {
        searchNote.innerHTML = 'You must enter at least 2 characters';
    } else {
        searchNote.innerHTML = 'No result found for your search';
    }
})

body.onclick = function(event) {
    if(event.target != navSearchIcon && event.target != shoppingCart && event.target != navPopupLogin){
        searchOptionContainer.style.height = '0vh';
        searchOptionCloseButton.style.display = 'none';
        searchBar.classList.remove('search-bar-animation');
        body.style.opacity = '1';
        jsMiniCart.style.right = '-380px';
        popupLoginDesktop.style.transform = 'scale(0)';
        popupLoginDesktop.style.transition = 'none';
    }
}

/* Start of Menu Page Script */
nextSlideButton.addEventListener('click', () => {
    draggable.style.left = '-178px';
})
/* End of Menu Page Script */