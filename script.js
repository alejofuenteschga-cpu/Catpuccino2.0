document.addEventListener("DOMContentLoaded", function() {
  const scrollContainer = document.querySelector('[data-scroll-container]');
  
  if (scrollContainer) {
    const scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      lerp: 0.07,
      smartphone: { smooth: false },
      tablet: { smooth: false }
    });

    // Recalcular el scroll al cargar imágenes
    window.addEventListener('load', () => {
      scroll.update();
    });
  }
});
