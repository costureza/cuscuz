const searchIcon=document.querySelector('.search-icon');
const searchForm=document.querySelector('.search-form');
const menuIcon=document.querySelector('.menu-icon');
const navbar=document.querySelector('.navbar');

searchIcon.addEventListener('click', ()=>{
    searchForm.classList.add("active");
    cartitemscontainer.classList.remove("active");
    navbar.classList.remove("active");
});
menuIcon.addEventListener('click', ()=>{
    navbar.classList.add("active");
    searchForm.classList.remove("active");
    cartitemscontainer.classList.remove("active");
});

const cartIcon=document.querySelector('.cart-icon');
const cartitemscontainer=document.querySelector('.cart-items-container');

cartIcon.addEventListener('click', ()=>{
    cartitemscontainer.classList.add("active");
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
});

window.onscroll=()=>{
    cartitemscontainer.classList.remove("active");
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
}