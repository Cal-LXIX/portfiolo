/*La déclaration const permet de créer une constante nommée accessible uniquement en lecture*/
const ratio = 0.2;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};
/* création fonction constante  */
const handleIntersection = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      /*Pour ajoutez une classe reveal-visible à un élément*/
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersection, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
  observer.observe(r);
});
