// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}





//Get the button:
mybutton = document.getElementById("myUpBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


const scrollOffset = 100;

const scrollElement = document.querySelector(".js-scroll");

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};

const displayScrollElement = () => {
  scrollElement.classList.add('scrolled');
}

const hideScrollElement = () => {
  scrollElement.classList.remove('scrolled');
}

const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
      displayScrollElement();
  } else {
    hideScrollElement();
  }
}

window.addEventListener('scroll', () => {
  handleScrollAnimation();
})

//initialize throttleTimer as false
let throttleTimer = false;

const throttle = (callback, time) => {
    //don't run the function while throttle timer is true
    if (throttleTimer) return;

    //first set throttle timer to true so the function doesn't run
    throttleTimer = true;

    setTimeout(() => {
        //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed
        callback();
        throttleTimer = false;
    }, time);
}

window.addEventListener('scroll', () => {
  throttle(handleScrollAnimation, 250);
})
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

window.addEventListener("scroll", () => {
  //check if mediaQuery exists and if the value for mediaQuery does not match 'reduce', return the scrollAnimation.
  if (mediaQuery && !mediaQuery.matches) {
    handleScrollAnimation()
  }
});



$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},800);

            }

        });

    });

});

function playAudio() {
    let sound = document.getElementById("myAudio");
    sound.play();
    setTimeout(function () {
        location.href = '#start';
    }, sound.duration * 1000);
}
const sound = document.getElementById("myAudio");
function playPlus(){
    sound.play();
    setTimeout(function (){
        plusSlides(1);
    }, sound.duration*1000);
}
function playMinus(){
    sound.play();
    setTimeout(function (){
        plusSlides(-1);
    }, sound.duration*1000);
}
