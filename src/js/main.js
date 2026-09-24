import { dataProduct } from "./object_data_product";

const burgerList = document.querySelector("#burger-list");
const navbarList = document.querySelector("#navbar-menu");
const carousel = document.querySelector("#carousel");

const slides = carousel.children;
let currentIndex = 0;
const totalSlides = slides.length;

burgerList.addEventListener("click", () => {
  navbarList.classList.toggle("hidden");
  navbarList.classList.toggle("flex");
});

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;

  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, 3000);

const productContainer = document.querySelector("#container-product");

function displayProducts() {
  const objectProduct = Object.values(dataProduct);

  if (!productContainer) return;

  productContainer.innerHTML = "";

  objectProduct.forEach((item) => {
    const cardProduct = document.createElement("div");
    cardProduct.className =
      "w-full max-w-100 flex flex-col justify-between p-5 bg-white outline-1 outline-solid outline-black/50 transition-all duration-300 hover:scale-95";

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.product;
    image.className = "w-md h-auto";

    const textContent = document.createElement("div");
    textContent.className = "flex flex-col gap-y-4 px-5";

    const title = document.createElement("h2");
    title.textContent = item.product;
    title.className =
      "text-center text-lenovo-blue text-lg xl:text-2xl font-semibold";

    const listDetail = document.createElement("ul");
    listDetail.className = "flex flex-col gap-y-1 list-disc text-left";

    item.detail.forEach((detailText) => {
      const detailItem = document.createElement("li");
      detailItem.textContent = detailText;
      detailItem.className = listDetail.appendChild(detailItem);
    });

    const buttonDetail = document.createElement("div");
    buttonDetail.textContent = "Product Detail";
    buttonDetail.className =
      "px-3 py-2 bg-lenovo-blue text-white text-md font-medium mx-5 text-center mt-10";

    textContent.appendChild(title);
    textContent.appendChild(listDetail);

    cardProduct.appendChild(image);
    cardProduct.appendChild(textContent);
    cardProduct.appendChild(buttonDetail);

    productContainer.appendChild(cardProduct);
  });
}

displayProducts();
