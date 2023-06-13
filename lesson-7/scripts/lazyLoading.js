
const imagesToLoad = document.querySelectorAll("img[data-src]");


function loadImages(image) {
    image.setAttribute('src', image.getAttribute("data-src"));
    image.onLoad = () =>{
        image.removeAttribute("data-src");
    };
   
};
// const imgOptions ={
//     root: null,
//     rootMargin: "0px 0px 50px 0px " ,
//   threshold: 0,
// }
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }