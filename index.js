const iconMenu = document.querySelector('.header__menu-icon')
if(iconMenu){
    const navList = document.querySelector('.nav-list')
    iconMenu.addEventListener('click',function(e){
        document.body.classList.toggle('_lock'); 
        iconMenu.classList.toggle('_active');
        navList.classList.toggle('_active');
         
    });
}




const gallery = document.querySelectorAll('.gallery .image'),
previewBox =  document.querySelector('.preview-box');
previewImg = previewBox.querySelector('.imgPop')
closeIcon = previewBox.querySelector('.close')
shadow = document.querySelector(".shadow")
header = document.querySelector('header')

window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++){
        let newIndex = i;
        let clickImgIndex;
        gallery[i].onclick = ()=>{
            clickImgIndex = newIndex;
            console.log(i);

            function preview(){
                let selectedImgUrl = gallery[newIndex].querySelector("img").src;
                previewImg.src = selectedImgUrl;
                console.log(selectedImgUrl);
            }

            const prevBtn = document.querySelector(".prev")
            const nextBtn = document.querySelector(".next")
            if(newIndex == 0){
                prevBtn.style.display = "none";
            }
            if(newIndex >= gallery.length - 1){
                nextBtn.style.display = "none";
            }
            prevBtn.onclick = () =>{
                newIndex--;
                if(newIndex == 0){
                    preview();
                    prevBtn.style.display = "none";
                }else{
                    preview();
                    nextBtn.style.display = "block";
                }
            }
            nextBtn.onclick = () =>{
                newIndex++;
                if(newIndex >= gallery.length - 1){
                    preview();
                    nextBtn.style.display = "none";
                }else{
                    preview();
                    prevBtn.style.display = "block";
                }
            }
            preview();
            previewBox.classList.add('show');
            shadow.style.display = "block";
            document.querySelector("body").style.overflow = "hidden";
            header.style.display = "none"

            closeIcon.onclick = ()=>{
                newIndex = clickImgIndex;
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove('show');
                shadow.style.display = "none";
                header.style.display = "block";
                document.querySelector("body").style.overflow = "visible";
            }
        }
    }
}
