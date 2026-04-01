const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-white", "shadow-md", "border-gray-200");
    navbar.classList.remove("bg-transparent", "border-transparent");
  } else {
    navbar.classList.add("bg-transparent", "border-transparent");
    navbar.classList.remove("bg-white", "shadow-md", "border-gray-200");
  }
});
const menu = document.getElementById("megaMenu");
const content = document.getElementById("megaContent");

let timeout;
const data = {
  women: `
      <div class="flex gap-20 z-100">
        <div  class="flex flex-row gap-20">
          
          <div>
          <h2 class="font-semibold mb-4">READY TO WEAR</h2>
           <ul class="space-y-3 text-sm flex flex-col gap-2">
             <li class="uppercase text-md hover-underline cursor-pointer">Dresses & skirts</li>
             <li class="uppercase text-md hover-underline cursor-pointer">coats & jackets</li>
             <li class="uppercase text-md hover-underline cursor-pointer">tops & shirts</li>
             <li class="uppercase text-md hover-underline cursor-pointer">trousers & shorts</li>
             <li class="uppercase text-md hover-underline cursor-pointer">t-shirts</li>
             <li class="uppercase text-md hover-underline cursor-pointer">suits</li>
           </ul>
          </div>
          <div>
           <h2 class="uppercase font-bold mb-4">accessories</h2>
           <ul class="space-y-3 text-sm flex flex-col gap-2">
             <li class="uppercase text-md hover-underline cursor-pointer">bags</li>
           </ul>
          </div>
        </div>
      </div>
      <div class="col-span-2 grid grid-cols-2 gap-6">
        <img src="image's/DSCF0542.jpg" class="rounded-lg h-[500px]">
        <img src="image's/DSCF0261.jpg" class="rounded-lg h-[500px]">
      </div>
    `,

  men: `
      <div class="flex gap-20 z-100">
        <div  class="flex flex-row gap-20">
          
          <div>
          <h2 class="font-semibold mb-4">READY TO WEAR</h2>
           <ul class="space-y-3 text-sm flex flex-col gap-2">
             <li class="uppercase text-md hover-underline cursor-pointer">coats & jackets</li>
             <li class="uppercase text-md hover-underline cursor-pointer">trousers & shorts</li>
             <li class="uppercase text-md hover-underline cursor-pointer">shirts</li>
             <li class="uppercase text-md hover-underline cursor-pointer">suits</li>
           </ul>
          </div>
          <div>
           <h2 class="uppercase font-semibold mb-4">polepole collection</h2>
          </div>
        </div>
      </div>
      <div class="col-span-2 grid grid-cols-2 gap-6">
        <img src="image's/DSCF0138_81e04729-7517-4d9c-afca-3c4950e83562.jpg" class="rounded-lg h-[500px]">
        <img src="image's/DSCF0620.jpg" class="rounded-lg h-[500px]">
      </div>
    `,

  life: `
     <div class="flex gap-20 z-100">
        <div  class="flex flex-row gap-20">
          
          <div>
          <h2 class="font-semibold mb-4">H&M x NEIMIL</h2>
           <ul class="space-y-3 text-sm flex flex-col gap-2">
             <li class="uppercase text-md hover-underline cursor-pointer">coats & jackets</li>
             <li class="uppercase text-md hover-underline cursor-pointer">trousers & shorts</li>
             <li class="uppercase text-md hover-underline cursor-pointer">shirts</li>
             <li class="uppercase text-md hover-underline cursor-pointer">suits</li>
           </ul>
          </div>
          <div>
           <h2 class="uppercase font-semibold mb-4">polepole collection</h2>
          </div>
        </div>
      </div>
      <div class="col-span-2 grid grid-cols-2 gap-6">
        <img src="image's/download.webp" class="rounded-lg h-[500px]">
        <img src="image's/download.webp" class="rounded-lg h-[500px]">
      </div>
    `,

  col: `
      <div class="flex gap-20 z-100">
        <div  class="flex flex-row gap-20">
          
          <div>
           <ul class="space-y-3 text-sm flex flex-col gap-2">
             <li class="uppercase text-md hover-underline cursor-pointer">polepole</li>
             <li class="uppercase text-md hover-underline cursor-pointer">leeto</li>
           </ul>
          </div>
        </div>
      </div>
      <div class="col-span-2 grid grid-cols-2 gap-6">
        <img src="image's/DSCF0138_81e04729-7517-4d9c-afca-3c4950e83562.jpg" class="rounded-lg h-[500px]">
        <img src="image's/DSCF0261.jpg" class="rounded-lg h-[500px]">
      </div>
    `,
};

function showMenu(type) {
  clearTimeout(timeout);
  content.innerHTML = data[type];

  menu.classList.remove("opacity-0", "invisible");
  menu.classList.add("opacity-100", "visible");
}

function hideMenu() {
  timeout = setTimeout(() => {
    if (!menu.matches(":hover")) {
      menu.classList.add("opacity-0", "invisible");
      menu.classList.remove("opacity-100", "visible");
    }
  }, 200);
}
document
  .getElementById("womenTrigger")
  .addEventListener("mouseenter", () => showMenu("women"));
document
  .getElementById("menTrigger")
  .addEventListener("mouseenter", () => showMenu("men"));
document
  .getElementById("lifeTrigger")
  .addEventListener("mouseenter", () => showMenu("life"));
document
  .getElementById("colTrigger")
  .addEventListener("mouseenter", () => showMenu("col"));

document.querySelectorAll(".menu-trigger").forEach((el) => {
  el.addEventListener("mouseleave", hideMenu);
});

menu.addEventListener("mouseenter", () => {
  clearTimeout(timeout);
});

menu.addEventListener("mouseleave", () => {
  menu.classList.add("opacity-0", "invisible");
  menu.classList.remove("opacity-100", "visible");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoHeight: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach((button) => {
  button.addEventListener("click", () => {

    buttons.forEach((btn) => btn.classList.remove("bg-black", "text-white"));

    contents.forEach((c) => c.classList.add("hidden"));

    button.classList.add("bg-black", "text-white");

    const tab = button.dataset.tab;
    const activeTab = document.getElementById(tab);
    activeTab.classList.remove("hidden");

    setTimeout(() => {
      activeTab.querySelectorAll(".swiper").forEach((swiperEl) => {
        if (swiperEl.swiper) swiperEl.swiper.update();
      });
    }, 100);
  });
});
