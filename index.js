const iconMenu = document.querySelector('.header__menu-icon')
if(iconMenu){
    const navList = document.querySelector('.nav-list')
    iconMenu.addEventListener('click',function(e){
        document.body.classList.toggle('_lock'); 
        iconMenu.classList.toggle('_active');
        navList.classList.toggle('_active');
         
    });
}


// var videoPlayButton,
//   videoWrapper = document.getElementsByClassName('video-wrapper')[0],
//     video = document.getElementsByTagName('video')[0],
//     videoMethods = {
//         renderVideoPlayButton: function() {
//             if (videoWrapper.contains(video)) {
//         this.formatVideoPlayButton()
//                 video.classList.add('has-media-controls-hidden')
//                 videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
//                 videoPlayButton.addEventListener('click', this.hideVideoPlayButton)

//             }
//         },

//         formatVideoPlayButton: function() {
//             videoWrapper.insertAdjacentHTML('beforeend', '\
//                 <svg  class="video-overlay-play-button"  width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">\
//                     <path opacity="0.3" d="M44 77C62.2254 77 77 62.2254 77 44C77 25.7746 62.2254 11 44 11C25.7746 11 11 25.7746 11 44C11 62.2254 25.7746 77 44 77Z" fill="white"/>\
//                     <path d="M55 44L38.5 33V55L55 44Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\
//                 </svg>\
//             ')
//         },

//         hideVideoPlayButton: function() {
//             // video.play()
//             // videoPlayButton.classList.add('is-hidden')
//             videoPlayButton.classList.toggle('is-hidden')

//             // video.classList.remove('has-media-controls-hidden')
//             video.classList.toggle('has-media-controls-hidden')

//             // video.setAttribute('controls', 'controls')
//             video .toggleAttribute('controls', 'controls')
//             if(videoPlayButton.classList.contains('is-hidden')){
//                 video.play()
//             }
//         }
//   }

// videoMethods.renderVideoPlayButton()