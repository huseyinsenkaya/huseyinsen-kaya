// LOADING
TweenMax.to(".loading--screen", 4, {
    delay: 6.6,
    top: "-110%",
    ease: Expo.easeInOut
  });
  
// Desktop
function desktopLoading(){
    var t1 = new TimelineMax();
  
    t1.from(".ringOne", 4, {
      delay: 0.4,
      opacity: 0,
      y: 40,
      ease: Expo.easeInOut
    }).from(".ringTwo", 4, {
      delay: 0.9,
      opacity: 0,
      y: 40,
      ease: Expo.easeInOut
    }, "-=5").to(".ringOne", 4, {
      delay: 0.4,
      x: 400,
      ease: Expo.easeInOut
    }).to(".ringTwo", 4, {
      delay: 0.9,
      x: 400,
      ease: Expo.easeInOut
    }, "-=5");
    
    
    TweenMax.from(".test, .d-text, .home__scroll-down", 3, {
      delay: 8.7,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    });
    
    TweenMax.from(".header__links, .header__logo", 3, {
      delay: 8.7,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    });
}

// Ipad
function iPadLoading(){
    var t1 = new TimelineMax();
  
    t1.from(".ringOne", 4, {
      delay: 0.4,
      opacity: 0,
      x: -250,
      ease: Expo.easeInOut
    }).from(".ringTwo", 4, {
      delay: 0.9,
      opacity: 0,
      x: 250,
      ease: Expo.easeInOut
    }, "-=5").to(".ringOne", 4, {
      delay: 0.4,
      y: -300,
      ease: Expo.easeInOut
    }).to(".ringTwo", 4, {
      delay: 0.9,
      y: -300,
      ease: Expo.easeInOut
    }, "-=5");
    
    
    TweenMax.from(".test, .d-text, .home__scroll-down", 3, {
      delay: 8.7,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    });
    
    TweenMax.from(".header__links, .header__logo", 3, {
      delay: 8.7,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    });
}

// Mobile
function mobileLoading(){
    var t1 = new TimelineMax();
  
    t1.from(".ringOne", 4, {
      delay: 0.4,
      opacity: 0,
      x: -400,
      ease: Expo.easeInOut
    }).from(".ringTwo", 4, {
      delay: 0.9,
      opacity: 0,
      x: 400,
      ease: Expo.easeInOut
    }, "-=5").to(".ringOne", 4, {
      delay: 0.4,
      y: -190,
      ease: Expo.easeInOut
    }).to(".ringTwo", 4, {
      delay: 0.9,
      y: -190,
      ease: Expo.easeInOut
    }, "-=5");
    
    
    TweenMax.from(".test, .d-text, .home__scroll-down", 3, {
      delay: 8.7,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    });
    
    TweenMax.from(".header__links, .header__logo, .header__toggle", 3, {
      delay: 8.7,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    });
}

if(screen.width > 1024){
    desktopLoading();
}
else if(768 < screen.width && screen.width <=1024) {
    iPadLoading();
}
else if (screen.width < 768) {
    mobileLoading();
}

  