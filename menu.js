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
// const menuListVeganPizzas = document.getElementById('menu-list-vegan-pizzas');
// const menuListPizzas = document.getElementById('menu-list-pizzas');
// const menuListDrinks = document.getElementById('menu-list-drinks');
// const menuListSalads = document.getElementById('menu-list-salads');
// const menuListPides = document.getElementById('menu-list-pides');
// const menuListSides = document.getElementById('menu-list-sides');
// const menuListWraps = document.getElementById('menu-list-wraps');
// const menuListKidsMeal = document.getElementById('menu-list-kids-meal');
// const menuListBistroSetMeals = document.getElementById('menu-list-bistro-set-meals');
// const menuLlistCombos = document.getElementById('menu-list-combos');
// const menuCartRow1 = document.getElementById('menu-cart-row1');
// const menuCartRow2 = document.getElementById('menu-cart-row2');
// const menuCartRow3 = document.getElementById('menu-cart-row3');
// const menuCartRow4 = document.getElementById('menu-cart-row4');
// const menuCartRow5 = document.getElementById('menu-cart-row5');
// const menuCartRow6 = document.getElementById('menu-cart-row6');
// const menuCartRow7 = document.getElementById('menu-cart-row7');
// const menuCartRow8 = document.getElementById('menu-cart-row8');
// const menuCartRow9 = document.getElementById('menu-cart-row9');
// const menuCartRow10 = document.getElementById('menu-cart-row10');
// const menuCartRow11 = document.getElementById('menu-cart-row11');
// const menuCartRow12 = document.getElementById('menu-cart-row12');
// const menuCartRow13 = document.getElementById('menu-cart-row13');
// const menuCartRow14 = document.getElementById('menu-cart-row14');
const prevSlideButton = document.getElementById('prev-slide-button');
const nextSlideButton = document.getElementById('next-slide-button');
const slickTrack = document.getElementById('slick-track');
let count = 0;
const filter = document.getElementById('filter');
const filterOption = document.getElementById('filter-option');
let filterOptionCounter = false;
let featuredBoxNavigation = document.getElementById('featured-box-navigation');
let featuredBox = document.getElementById('featured-box');
let featuredBoxNavigationDivOne = document.getElementById('featured-box-navigation-div-one');
let featuredBoxNavigationDivTwo = document.getElementById('featured-box-navigation-div-two');
let featuredBoxNavigationDivThree = document.getElementById('featured-box-navigation-div-three');
const featuredTop = document.getElementById('featured-top');
const featuredList = document.getElementById('featured-list');
let featuredTopCounter = false;
let nineDots = document.getElementById('nine-dots');
let menuPageCart = document.getElementsByClassName('menu-page-cart');


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

/*
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
*/
window.addEventListener('keyup', () => {
    if(searchBarInput.value.length < 2) {
        searchNote.innerHTML = 'You must enter at least 2 characters';
    } else {
        searchNote.innerHTML = 'No result found for your search';
    }
})

body.onclick = function(event) {
    if(event.target != navSearchIcon && event.target != shoppingCart && event.target != navPopupLogin && event.target != featuredTop){
        searchOptionContainer.style.height = '0vh';
        searchOptionCloseButton.style.display = 'none';
        searchBar.classList.remove('search-bar-animation');
        body.style.opacity = '1';
        jsMiniCart.style.right = '-380px';
        popupLoginDesktop.style.transform = 'scale(0)';
        popupLoginDesktop.style.transition = 'none';
        featuredList.style.display = 'none';
        featuredTopCounter = false;
    }
}

/* Start of Menu Page Script */
nextSlideButton.addEventListener('click', () => {
    if(count < 4){
        count++;
        slickTrack.style.transform += 'translate3d(-178px, 0px, 0px)';
        console.log(count);
    }
})

prevSlideButton.addEventListener('click', () => {
    if(count == 0){
        slickTrack.style.transform = 'translate3d(0px, 0px, 0px)';
        console.log(count);
    }
    else{
        slickTrack.style.transform += 'translate3d(178px, 0px, 0px)';
        count--;
        console.log(count);
    }
})

filter.addEventListener('click', () => {
    if(filterOptionCounter == false) {
        filterOption.style.height = '400px';
        filterOption.style.padding = '30px';
        filterOption.style.border = '1px solid #b8b6b6';
        filterOptionCounter = true;
    } else {
        filterOption.style.height = '0px';
        filterOption.style.padding = '0px';
        filterOption.style.border = 'none';
        filterOptionCounter = false;
    }
})

featuredBoxNavigation.addEventListener('mouseover', () => {
    featuredBoxNavigation.style.transform = 'scaleX(1)';
    featuredBoxNavigation.style.opacity = '1';
})

featuredBoxNavigation.addEventListener('mouseout', () => {
    featuredBoxNavigation.style.transform = 'scaleX(0)';
    featuredBoxNavigation.style.opacity = '0';
})

featuredBoxNavigationDivOne.addEventListener('click', () => {
    for(var i = 0; i < menuPageCart.length; i++) {
        menuPageCart[i].style.width = "47%";
    }
    featuredBoxNavigationDivOne.style.backgroundColor = "#000";
    featuredBoxNavigationDivOne.style.color = "#fff";
    featuredBoxNavigationDivTwo.style.backgroundColor = "#fff";
    featuredBoxNavigationDivTwo.style.color = "#000";
    featuredBoxNavigationDivThree.style.backgroundColor = "#fff";
    featuredBoxNavigationDivThree.style.color = "#000";
})

featuredBoxNavigationDivTwo.addEventListener('click', () => {
    for(var i = 0; i < menuPageCart.length; i++) {
        menuPageCart[i].style.width = "30.5%";
    }
    featuredBoxNavigationDivTwo.style.backgroundColor = "#000";
    featuredBoxNavigationDivTwo.style.color = "#fff";
    featuredBoxNavigationDivOne.style.backgroundColor = "#fff";
    featuredBoxNavigationDivOne.style.color = "#000";
    featuredBoxNavigationDivThree.style.backgroundColor = "#fff";
    featuredBoxNavigationDivThree.style.color = "#000";
})

featuredBoxNavigationDivThree.addEventListener('click', () => {
    for(var i = 0; i < menuPageCart.length; i++) {
        menuPageCart[i].style.width = "22.4%";
    }
    featuredBoxNavigationDivThree.style.backgroundColor = "#000";
    featuredBoxNavigationDivThree.style.color = "#fff";
    featuredBoxNavigationDivOne.style.backgroundColor = "#fff";
    featuredBoxNavigationDivOne.style.color = "#000";
    featuredBoxNavigationDivTwo.style.backgroundColor = "#fff";
    featuredBoxNavigationDivTwo.style.color = "#000";
})

nineDots.addEventListener('mouseover', () => {
    featuredBoxNavigation.style.transform = 'scaleX(1)';
    featuredBoxNavigation.style.opacity = '1';
})

nineDots.addEventListener('mouseout', () => {
    featuredBoxNavigation.style.transform = 'scaleX(0)';
    featuredBoxNavigation.style.opacity = '0';
})

featuredTop.addEventListener('click', () => {
    if(featuredTopCounter == false) {
        featuredList.style.display = 'block';
        featuredTopCounter = true;
    } else {
        featuredList.style.display = 'none';
        featuredTopCounter = false;
    }
})
/* End of Menu Page Script */


