/* ------------------------------CAROUSEL------------------------------ */
const carouselButtons = document.querySelectorAll(".button");
const images = document.querySelectorAll(".image");

carouselButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    disableSelectedButton();

    selectCarouselButton(button);

    hideActiveImage();

    showBackgroundImage(index);
  });
});

function showBackgroundImage(index) {
  images[index].classList.add("active");
}

function selectCarouselButton(button) {
  button.classList.add("selected");
}

function hideActiveImage() {
  const activeImage = document.querySelector(".active");
  activeImage.classList.remove("active");
}

function disableSelectedButton() {
  const selectedButton = document.querySelector(".selected");
  selectedButton.classList.remove("selected");
}
/* ------------------------------CAROUSEL------------------------------ */

/* ------------------------------PRODUCT SLIDER------------------------------ */
const initProductSlider = () => {
  const productList = document.querySelector(".product-list");
  const productSlideButtons = document.querySelectorAll(".product-slider-btn");

  const maxScrollLeft = productList.scrollWidth - productList.clientWidth;

  productSlideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = productList.clientWidth * direction;
      productList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
  const handleProductSlideButtons = () => {
    productSlideButtons[0].style.display =
      productList.scrollLeft <= 0 ? "none" : "block";
    productSlideButtons[1].style.display =
      productList.scrollLeft >= maxScrollLeft ? "none" : "block";
  };

  productList.addEventListener("scroll", () => {
    handleProductSlideButtons();
  });
};

window.addEventListener("load", initProductSlider);
/* ------------------------------PRODUCT SLIDER------------------------------ */
