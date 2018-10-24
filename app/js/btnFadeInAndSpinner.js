function BODY_BEFORE_START(state) {
  const bodyBeforeStart = document.body;
  bodyBeforeStart.style.overflow = state;
};
BODY_BEFORE_START('hidden');

window.onload = () => {
  BODY_BEFORE_START('initial');
  const hideSpinner = (function name() {
    const spinner = document.querySelector('.spinner');
    const spinnerBg = document.querySelector('.spinner-bg');
    function spinnerFadeOut() {
      const spinnerAnimate = new Promise(function (resolve) {
        spinner.style.opacity = 0;
        spinnerBg.style.opacity = 0;
        setTimeout(() => {
          spinner.style.display = 'none';
          spinnerBg.style.display = 'none';
          resolve();
        }, 300);
      });
      return spinnerAnimate;
    };
    spinnerFadeOut()
  })();

  (function greetingsBtnAnimation() {
    const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
    const btnCont = document.querySelector('.header-second__container--left');
    function startAnimate(){
      btnCont.animate([
      { transform: "translateX(800px)"}
    ], {
      duration: 600,
      easing: "ease-in-out",
      fill: "forwards"
    });
  };
    requestAnimationFrame(startAnimate)
  })();
};