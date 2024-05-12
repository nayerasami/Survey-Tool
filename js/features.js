$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        rtl: true,
        autoplay: false,
        nav: true,
       dots:false,
        fallbackEasing: 'easeInOut',
        responsive: {
            0: {
                items: 1,
                stagePadding: 100 // Adjust stage padding for smaller screens
            },
            600: {
                items: 1,
                stagePadding: 150 // Adjust stage padding for medium screens
            },
            1000: {
                items: 1,
                stagePadding: 200 // Adjust stage padding for larger screens
            }
        }
    });
});
$(document).ready(function(){
    $(".survey-carousel").owlCarousel({
        loop: true,
        rtl: true,
        autoplay: false,
        nav: true,
        items: 4,
        dots: false,
        fallbackEasing: 'easeInOut',
        responsive: {
            0: {
                items: 3,
                stagePadding: 20 // Adjust stage padding for smaller screens
            },
            600: {
                items: 3,
                stagePadding: 20 // Adjust stage padding for medium screens
            },
            1000: {
                items: 3, // Display three items for larger screens
                stagePadding:20 // Adjust stage padding for larger screens if needed
            }
        }
    });
});





const freeTrialSection = document.querySelector('.free-trial');
const trialMailEl =document.querySelector('.trial-mail');
const trialDescriptionEl =document.querySelector('.trial-description')


freeTrialSection.addEventListener('click', function (e) {
  if (!freeTrialSection.classList.contains('lastSection')) {
      
    freeTrialSection.classList.add('lastSection', 'scalingBackgroundBack', 'fade-out');
    trialMailEl.classList.add('animateMailBox')
    trialDescriptionEl.classList.add('animatedDescriptionText')
    freeTrialSection.addEventListener('animationend', function () {
    freeTrialSection.classList.remove('fade-out');
    
    }, { once: true });
    
} else {
  freeTrialSection.classList.remove('scalingBackgroundBack');
  freeTrialSection.classList.add('scalingUpBackground','fade-out')
        
  trialMailEl.classList.remove('animateMailBox')
    trialDescriptionEl.classList.remove('animatedDescriptionText')
    trialDescriptionEl.classList.add('animatedDescriptionTextBack')
    trialMailEl.classList.remove('animateMailBox')
    trialMailEl.classList.add('animateMailBoxBack')

  freeTrialSection.addEventListener('animationend', function () {

      freeTrialSection.classList.remove('lastSection', 'scalingUpBackground','fade-out');
      
  }, { once: true });

    }
});

