const hamburger = document.getElementById("hamburger");
const navLinkUl = document.querySelector(".navigator-links");
const navigator = document.getElementById("navigator");
const homeHeroSelector = document.getElementById("home-hero");
window.addEventListener("load", () => {
  setTimeout(() => {
    homeHeroSelector.classList.add("home-hero-active");
  }, 1000);
});
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("change");
  navLinkUl.classList.toggle("active");
});

const navBgChange = (e) => {
  if (scrollY > navigator.offsetHeight + 100) {
    navigator.classList.add("moving");
    hamburger.style.top = "12px";
  } else {
    navigator.classList.remove("moving");
    hamburger.style.top = "30px";
  }
};

window.addEventListener("scroll", navBgChange);

const navLinks = document.querySelectorAll(".navigatorlinks-ul li a");
navigator.addEventListener("click", (e) => {
  if (!e.target.closest("li a")) return;
  for (let links of navLinks) {
    links.classList.remove("navigatorlink-active");
  }
  e.target.closest("li a").classList.add("navigatorlink-active");
  if (window.innerWidth <= 1100) {
    hamburger.classList.toggle("change");
    navLinkUl.classList.toggle("active");
  }
});

// Question answer function
const questionSelector = document.querySelector(".faq-container-question");
const questionsSelector = document.querySelectorAll(".faq-container-questions");

questionSelector.addEventListener("click", (e) => {
  if (!e.target.closest(".faq-images")) return;

  for (let question of questionsSelector) {
    if (!e.target.closest("[data-isactive='true']")) {
      continue;
    }
    question.classList.remove("faq-active");
  }

  e.target.closest(".faq-container-questions").classList.toggle("faq-active");
  try {
    e.target.closest("[data-isactive='true']").dataset.isactive = "false";
  } catch (err) {
    return;
  }
});

const faqImages = document.querySelectorAll(".faq-images img");

const innerHeight = () => {
  return (window.innerHeight / 5) * 4;
};
const boundClient = (value) => {
  return value.getBoundingClientRect().top + 50;
};

// home section
const home = document.querySelector(".home");
const homeSection = (e) => {
  const triggerBottom = innerHeight();
  const clientRect = boundClient(home);

  if (clientRect < triggerBottom) {
    for (let links of navLinks) {
      links.classList.remove("navigatorlink-active");
    }
    navLinks[0].classList.add("navigatorlink-active");
  } else {
    navLinks[0].classList.remove("navigatorlink-active");
  }
};
window.addEventListener("scroll", homeSection);

//  how-we-work  section
const howWeWorkSection = document.querySelector(".how-we-work");
const howWeWork = (e) => {
  const triggerBottom = innerHeight();
  const clientRect = boundClient(howWeWorkSection);

  if (clientRect < triggerBottom) {
    for (let links of navLinks) {
      links.classList.remove("navigatorlink-active");
    }
    navLinks[1].classList.add("navigatorlink-active");
    howWeWorkSection.classList.add("active");
  } else {
    navLinks[1].classList.remove("navigatorlink-active");
    howWeWorkSection.classList.remove("active");
  }
};
window.addEventListener("scroll", howWeWork);

// our work section
const ourWorkSection = document.querySelector(".our-work");
const ourWork = (e) => {
  const triggerBottom = innerHeight();
  const clientRect = boundClient(ourWorkSection);
  if (clientRect < triggerBottom) ourWorkSection.classList.add("active");
  else ourWorkSection.classList.remove("active");
};
window.addEventListener("scroll", ourWork);

// featutres scroll
const featuresSection = document.querySelector(".features");
const features = (e) => {
  const triggerBottom = innerHeight();
  const clientRect = boundClient(featuresSection);
  if (clientRect < triggerBottom) {
    for (let links of navLinks) {
      links.classList.remove("navigatorlink-active");
    }
    navLinks[2].classList.add("navigatorlink-active");
    featuresSection.classList.add("active");
  } else {
    navLinks[2].classList.remove("navigatorlink-active");
    featuresSection.classList.remove("active");
  }
};
window.addEventListener("scroll", features);

//Testimonial
const testimonialSection = document.querySelector(".testimonial");
const testimonial = (e) => {
  const triggerBottom = innerHeight();
  const clientRect = boundClient(testimonialSection);
  if (clientRect < triggerBottom) {
    for (let links of navLinks) {
      links.classList.remove("navigatorlink-active");
    }
    navLinks[3].classList.add("navigatorlink-active");
    testimonialSection.classList.add("active");
  } else {
    navLinks[3].classList.remove("navigatorlink-active");
    testimonialSection.classList.remove("active");
  }
};
window.addEventListener("scroll", testimonial);

// Faq section
const faqSection = document.querySelector(".faq");

const faq = (e) => {
  const triggerBottom = innerHeight();
  const clientRect = boundClient(faqSection);
  if (clientRect < triggerBottom) {
    for (let links of navLinks) {
      links.classList.remove("navigatorlink-active");
    }
    navLinks[4].classList.add("navigatorlink-active");
    faqSection.classList.add("active");
  } else {
    navLinks[4].classList.remove("navigatorlink-active");
    faqSection.classList.remove("active");
  }
};
window.addEventListener("scroll", faq);

// conatct form section
const contactFormSection = document.querySelector(".contact-form");

const contactForm = (e) => {
  const triggerBottom = innerHeight();
  const clientRect = boundClient(contactFormSection);
  if (clientRect < triggerBottom) contactFormSection.classList.add("active");
  else contactFormSection.classList.remove("active");
};
window.addEventListener("scroll", contactForm);

const ourBlogSection = document.querySelector(".our-blog");
const ourBlog = (e) => {
  const triggerBottom = innerHeight();
  const clientRect = boundClient(ourBlogSection);
  if (clientRect < triggerBottom) {
    for (let links of navLinks) {
      links.classList.remove("navigatorlink-active");
    }
    navLinks[5].classList.add("navigatorlink-active");
    ourBlogSection.classList.add("active");
  } else {
    navLinks[5].classList.remove("navigatorlink-active");
    ourBlogSection.classList.remove("active");
  }
};
window.addEventListener("scroll", ourBlog);

const footer = document.querySelector(".footer");
const footerSection = (e) => {
  const triggerBottom = innerHeight();
  const clientRect = boundClient(footer);

  if (clientRect < triggerBottom) {
    for (let links of navLinks) {
      links.classList.remove("navigatorlink-active");
    }
    navLinks[6].classList.add("navigatorlink-active");
  } else {
    navLinks[6].classList.remove("navigatorlink-active");
  }
};
window.addEventListener("scroll", footerSection);

//  Slide animation
const autoDir = "left",
  btnLeft = document.querySelector(".button-left"),
  btnRight = document.querySelector(".button-right"),
  slider = document.querySelector(".slides"),
  slides = document.querySelectorAll(".slides li"),
  SPEED = 3000;
let count = 0,
  autoplay = null;

btnLeft.addEventListener("click", () => slide("right"));
btnRight.addEventListener("click", () => slide("left"));

const arrowButtons = document.querySelectorAll(".arrow-button");

arrowButtons.forEach((button) => {
  button.addEventListener("click", () => {
    for (let arrowButton of arrowButtons) {
      arrowButton.classList.remove("active");
    }
    button.classList.add("active");
  });
});

window.addEventListener("keydown", (e) => {
  const triggerBottom = innerHeight();
  const clientRect = boundClient(testimonialSection);
  const clientRectBottom = testimonialSection.getBoundingClientRect().bottom;
  const clientRectTotal = clientRectBottom - clientRect + clientRectBottom;

  if (clientRect < triggerBottom && triggerBottom < clientRectTotal) {
    if (e.key === "ArrowRight") {
      for (let arrowButton of arrowButtons) {
        arrowButton.classList.remove("active");
      }
      arrowButtons[1].classList.add("active");
      slide("left");
    }
    if (e.key === "ArrowLeft") {
      for (let arrowButton of arrowButtons) {
        arrowButton.classList.remove("active");
      }
      arrowButtons[0].classList.add("active");
      slide("right");
    }
  }
});
window.addEventListener("load", () => {
  setTimeout(() => {
    autoplay = setInterval(() => slide("auto"), SPEED);
  }, 2000);
});

function slide(direction) {
  if (direction === "right" || direction === "left") {
    stopInterval();
  }

  direction = direction == "auto" ? autoDir : direction;

  [].forEach.call(slides, (photo) => {
    photo.classList.remove("outleft", "outright", "forOpacity");
  });

  slides[count].classList.remove("inleft", "inright", "forOpacity");

  slides[count].classList.add("out" + direction);

  count = direction == "right" ? count - 1 : count + 1;

  if (count > slides.length - 1) {
    count = count % slides.length;
  }

  if (count < 0) {
    count = slides.length - 1;
  }

  slides[count].classList.add("in" + direction);
}

function stopInterval() {
  clearInterval(autoplay);
  autoplay = null;
}

// slider function

// credit: http://www.javascriptkit.com/javatutors/touchevents2.shtml
function swipedetect(el, callback) {
  var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    dist,
    threshold = 150, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function (swipedir) {};

  touchsurface.addEventListener(
    "touchstart",
    function (e) {
      var touchobj = e.changedTouches[0];
      swipedir = "none";
      dist = 0;
      startX = touchobj.pageX;
      startY = touchobj.pageY;
      startTime = new Date().getTime(); // record time when finger first makes contact with surface
      e.preventDefault();
      console.log(
        "startX:",
        startX,
        "startY:",
        startY,
        "startTime:",
        startTime
      );
    },
    false
  );

  touchsurface.addEventListener(
    "touchmove",
    function (e) {
      e.preventDefault(); // prevent scrolling when inside DIV
    },
    false
  );

  touchsurface.addEventListener(
    "touchend",
    function (e) {
      var touchobj = e.changedTouches[0];
      distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
      distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
      elapsedTime = new Date().getTime() - startTime; // get time elapsed
      if (elapsedTime <= allowedTime) {
        // first condition for awipe met
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
          // 2nd condition for horizontal swipe met
          swipedir = distX < 0 ? "left" : "right";
          if (swipedir === "right") {
            for (let arrowButton of arrowButtons) {
              arrowButton.classList.remove("active");
            }
            arrowButtons[1].classList.add("active");
          }
          if (swipedir === "left") {
            for (let arrowButton of arrowButtons) {
              arrowButton.classList.remove("active");
            }
            arrowButtons[0].classList.add("active");
          }

          slide(swipedir);
        } else if (
          Math.abs(distY) >= threshold &&
          Math.abs(distX) <= restraint
        ) {
          // 2nd condition for vertical swipe met
          swipedir = distY < 0 ? "up" : "down";
          // if dist traveled is negative, it indicates up swipe
        }
      }
      handleswipe(swipedir);
      // e.preventDefault();
    },
    false
  );
}

//USAGE:

const slidesEl = document.querySelector(".slides");
swipedetect(slidesEl);
