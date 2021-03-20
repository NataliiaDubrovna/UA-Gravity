const iconMenu = document.querySelector('.menu_icon')
if(iconMenu){
    const navList = document.querySelector('.nav_list')
    iconMenu.addEventListener('click',function(e){
        document.body.classList.toggle('_lock'); 
        iconMenu.classList.toggle('_active');
        navList.classList.toggle('_active');
         
    });
}