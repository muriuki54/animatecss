$(document).ready(() => {
    ///////////////// detect scroll to show menu /////////////////
    var lastScrollTop = 0;

    console.log($(window).width())

    //if($(window).width() > 768) scroll()

    
        $(window).on('scroll', function() {
            st = $(this).scrollTop();
            if(st < lastScrollTop && $(window).width() > 768) {
                //console.log('up 1');
                $('#navigation-menu').addClass('fixed')
    
            }
            else {
                //console.log('down 1');
                $('#navigation-menu').removeClass('fixed')
            }
            lastScrollTop = st;
        }); 

    ///////// toggle menu //////////////////////////
    $('.toggle').on('click', () => {
        $('#navigation-menu').toggleClass('active')
        $('.toggle').toggleClass('active')
    })

 })


 //element.classList.add('animate__animated', 'animate__bounceOutLeft');

 const cards = document.querySelectorAll('.preview-card')
 const aboutLeft = document.querySelector('.home-page-about-preview-left')
 const aboutRight = document.querySelector('.home-page-about-preview-right')

 const options = { threshold: 0.2 }

 const observer = new IntersectionObserver(checkIntersection, options)

 function checkIntersection(entries) {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.style.visibility = 'visible'
            if(entry.target.classList.contains('home-page-about-preview-right')){ 
                entry.target.classList.add('animate__animated','animate__slideInRight')
            } else if(entry.target.classList.contains('preview-card')) {
                entry.target.classList.add('animate__animated','animate__slideInUp')   
            }
            entry.target.classList.add('animate__animated','animate__slideInLeft')
            console.log(entry.target.classList)
        }
    })
 }

 cards.forEach((card) => {
     observer.observe(card)
 })
observer.observe(aboutLeft)
observer.observe(aboutRight)
//  setTimeout(() => {
//      cards.forEach(card => {
//          if(card.classList.contains('animate__animated','animate__slideInLeft')) {
//              card.classList.remove('animate__animated','animate__slideInLeft')
//              //card.classList.remove('animate__slideInLeft')
//              console.log('has classes')
//          }
//      })
//  }, 2000);