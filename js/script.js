var header = $(".cus-nav")
var width = $( window ).width();
var loader = document.getElementById('overlay')

window.addEventListener('load', function() {
    loader.style.display = "none"
})

if(width > 768) {
    $('#fullpage').pagepiling({
        menu: "#menu",
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
    });
} else {
    $('#fullpage').pagepiling()
}

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
            header.addClass("fixed");
    } else {
            header.removeClass("fixed");
    }
});

$(document).on('click', '.link', function() {
    event.preventDefault()
    var section = $(this).attr('data-move')
    $('#fullpage').pagepiling.moveTo(section);
})