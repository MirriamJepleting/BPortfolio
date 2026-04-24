const animatedItems = document.querySelectorAll(".fade-up, .fade-down, .fade-left, .slide-left, .slide-right");

const revealOnScroll = () => {
  animatedItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < window.innerHeight - 60) {
      item.style.animationPlayState = "running";
    }
  });
};

animatedItems.forEach((item) => {
  item.style.animationPlayState = "paused";
});

window.addEventListener("load", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);
