const initSlider = () => {
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

window.addEventListener("load", initSlider);
