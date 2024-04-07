AOS.init({
	duration: 1000,
    //once: true,
    disable: 'mobile'
});

$(function() {
  $('.lazy-load').lazy();
});

// SVG file to SVG code convert JS Start
function img2svg() {
  jQuery('.in-svg').each(function(i, e) {
    var $img = jQuery(e);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');
      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', ' ' + imgClass + ' replaced-svg');
      }
      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');
      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });
}
img2svg();
// SVG file to SVG code convert JS End

// Car Adventure Slider JS
var adventureSlider = new Swiper(".car__adventure__slider", {
  effect: "fade",
  autoHeight: true,
  fadeEffect: { crossFade: true },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});
// Car Adventure Slider JS

// Car Model Slider JS
var modelSlider = new Swiper(".car__model__slider", {
  effect: "fade",
  autoHeight: true,
  fadeEffect: { crossFade: true },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});
// Car Model Slider JS

// Our Stories Slider Slider JS
var storiesSlider = new Swiper(".our__stories__slider", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3.3,
        spaceBetween: 20
      },
      1400: {
        slidesPerView: 4.4,
        spaceBetween: 30
      }
    }
});
// Our Stories Slider Slider JS

// Menu JS
$(document).ready(function(){
  $(".mobile__menu").click(function(){
      console.log('clicked')
    $(this).toggleClass("show");
    $(".navbar").toggleClass("show");
  });
});

 

$(document).ready(function(){
  $(".menu-arrow").click(function() {
    $(this).siblings(".nav-sub-menu").toggle();
  });
});
// Menu JS

// Header Fixed JS
jQuery(document).ready(function()
{
    jQuery(window).scroll(function() {    
        var scroll = jQuery(window).scrollTop();
        if ( $(window).width() > 1080 && $(window).width() < 1921) {
            if (scroll >= 100) {
                jQuery("header").addClass("fixed-header");
            } else {
                jQuery("header").removeClass("fixed-header");
            } 
        }else if($(window).width() > 1922 && $(window).width() < 3200) {
            if (scroll >= 150) {
                jQuery("header").addClass("fixed-header");
            } else {
                jQuery("header").removeClass("fixed-header");
            } 
        }
        
         
    });
});
// Header Fixed JS

// Image Effect JS
gsap.registerPlugin(ScrollTrigger);

let revealContainers = document.querySelectorAll(".reveal");

revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      toggleActions: "restart none none reset"
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    xPercent: -100,
    ease: Power2.out
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out
  });
});
// Image Effect JS
