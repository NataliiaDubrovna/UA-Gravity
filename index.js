const iconMenu = document.querySelector('.header__menu-icon')
if(iconMenu){
    const navList = document.querySelector('.nav-list')
    iconMenu.addEventListener('click',function(e){
        document.body.classList.toggle('_lock'); 
        iconMenu.classList.toggle('_active');
        navList.classList.toggle('_active');
         
    });
}