$(document).ready(() => {
    ///////////////// detect scroll to show menu /////////////////
    var lastScrollTop = 0;

    console.log($(window).width())

    //if($(window).width() > 768) scroll()

    
        $(window).on('scroll', function() {
            st = $(this).scrollTop();
            if(st < lastScrollTop && $(window).width() > 768) {
                console.log('up 1');
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