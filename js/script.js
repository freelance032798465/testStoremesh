const cards = [
  {
    imgSrc:
      "https://as2.ftcdn.net/jpg/08/78/15/57/220_F_878155786_qtJx8Gn5A71PNEL2nvE1gyp5AoVnDhsd.jpg",
    title: "Article 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit corrupti nobis ducimus odioexpedita obcaecati reprehenderit eligendi sapiente deleniti iure.",
  },
  {
    imgSrc:
      "https://as2.ftcdn.net/jpg/08/78/15/47/220_F_878154775_lkrRfiZXvyDsZfaEKmXVKX71qIr7olZN.jpg",
    title: "Article 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet voluptate soluta architectoexercitationem ratione nobis illo iure aut maxime quaerat.",
  },
  {
    imgSrc:
      "https://as1.ftcdn.net/jpg/12/15/81/54/220_F_1215815482_j60sKymNHMvlMGmploZCPTMCWsb8ZRUw.jpg",
    title: "Article 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit corrupti nobis ducimus odioexpedita obcaecati reprehenderit eligendi sapiente deleniti iure.",
  },
  {
    imgSrc:
      "https://as1.ftcdn.net/jpg/12/15/81/44/220_F_1215814486_6vxsXkIfCoXZ8uSchnFCxtmb9OS7BFH7.jpg",
    title: "Article 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    imgSrc:
      "https://as1.ftcdn.net/jpg/12/15/81/40/220_F_1215814027_VPokAk3AXhXZxLQFIJuCzbkd4R57BOxA.jpg",
    title: "Article 5",
    description: "Sit corrupti nobis ducimus odio expedita obcaecati.",
  },
  {
    imgSrc:
      "https://as2.ftcdn.net/jpg/12/13/56/17/220_F_1213561794_nqrX8LObEYvV41aA7N4mpJkTw545lcNM.jpg",
    title: "Article 6",
    description: "Reprehenderit eligendi sapiente deleniti iure.",
  },
  {
    imgSrc:
      "https://as1.ftcdn.net/jpg/12/12/47/78/220_F_1212477869_4PjRRxdkKnD2u25XWK5Db8Lc7DZFRYqc.jpg",
    title: "Article 7",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet voluptate soluta architectoexercitationem ratione nobis illo iure aut maxime quaerat.",
  },
  {
    imgSrc:
      "https://as2.ftcdn.net/jpg/12/06/49/81/220_F_1206498147_QkHQIsmrkcWvqu02OYSgGM7txWhUTLIM.jpg",
    title: "Article 8",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet voluptate soluta architectoexercitationem ratione nobis illo iure aut maxime quaerat.",
  },
  {
    imgSrc:
      "https://as1.ftcdn.net/jpg/12/05/82/58/220_F_1205825882_YlQpxkXKTmeHU3VzCQh2EZ354HPkBmvE.jpg",
    title: "Article 9",
    description: "Reprehenderit eligendi sapiente deleniti iure.",
  },
];

let currentPage = 1;
const cardsPerPageDesktop = 7;
const cardsPerPageMobile = 5;

function renderCards() {
  const container = document.querySelector(".data-content");
  const isMobile = window.innerWidth <= 879;
  const cardsPerPage = isMobile ? cardsPerPageMobile : cardsPerPageDesktop;

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const cardsToDisplay = cards.slice(startIndex, endIndex);

  container.innerHTML = "";
  cardsToDisplay.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("data-card");
    cardElement.innerHTML = `
        <div class="data-more">
            <a href="#">more</a>
        </div>
        <div class="data-img">
            <img src="${card.imgSrc}" alt="data">
        </div>
        <div class="data-text">
            <h2>${card.title}</h2>
            <p>${card.description}</p>
        </div>
    `;
    container.appendChild(cardElement);
  });

  document.querySelector(".btBackPage").style.visibility =
    currentPage === 1 ? "hidden" : "visible";
  document.querySelector(".btNextPage").style.visibility =
    currentPage * cardsPerPage >= cards.length ? "hidden" : "visible";
  document.querySelector(".lbPage").textContent = currentPage;
}

function changePage(direction) {
  currentPage += direction;
  renderCards();
}

window.addEventListener("resize", renderCards);
renderCards();

document.querySelector(".filter-box").addEventListener("click", (event) => {
  if (!event.target.closest(".filter-option")) {
    var filterOption = document.querySelector(".filter-option");
    filterOption.style.display =
      filterOption.style.display === "block" ? "none" : "block";
    var filterBox = document.querySelector(".filter-box");
    filterBox.style.borderRadius =
      filterOption.style.display === "block" ? "10px 10px 0 0" : "10px";
  }
});

document.querySelectorAll(".filter-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".filter-box span").textContent = item.textContent;
    document.querySelector(".filter-option").style.display = "none";
    document.querySelector(".filter-box").style.borderRadius = "10px";
  });
});

document.querySelector(".btGirdMenu").addEventListener("click", () => {
  document.querySelector(".grid-menu").classList.add("active");
  document.querySelector(".overlay").style.display = "block";
});

document.querySelector(".overlay").addEventListener("click", () => {
  document.querySelector(".grid-menu").classList.remove("active");
  document.querySelector(".user-menu").classList.remove("active");
  document.querySelector(".sortby-menu").classList.remove("active");
  document.querySelector(".search-mobile-input").classList.remove("active");
  document.querySelector(".overlay").style.display = "none";
});

document.querySelectorAll(".grid-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".grid-menu").classList.remove("active");
  });
});

document.querySelector(".btUser").addEventListener("click", () => {
  document.querySelector(".user-menu").classList.add("active");
  document.querySelector(".overlay").style.display = "block";
});

document.querySelectorAll(".user-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".user-menu").classList.remove("active");
  });
});

document.querySelector(".sortBy").addEventListener("click", () => {
  document.querySelector(".sortby-menu").classList.add("active");
  document.querySelector(".overlay").style.display = "block";
});

document.querySelectorAll(".sortby-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".sortby-menu").classList.remove("active");
    document.querySelector(".overlay").style.display = "none";
  });
});

document.querySelector(".btSearchMobile").addEventListener("click", () => {
  document.querySelector(".search-mobile-input").classList.add("active");
  document.querySelector(".overlay").style.display = "block";
  document.querySelector(".search-mobile-input").focus();
});

document
  .querySelector(".search-mobile-input")
  .addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      document.querySelector(".search-mobile-input").classList.remove("active");
      document.querySelector(".overlay").style.display = "none";
    }
  });

document.querySelector(".btMenuMobile").addEventListener("click", () => {
  var mobileMenu = document.querySelector(".mobile-menu-container");
  var btSearchMobile = document.querySelector(".btSearchMobile");
  if (!mobileMenu.classList.contains("active")) {
    mobileMenu.classList.add("active");
    btSearchMobile.style.visibility = "hidden";
  } else {
    mobileMenu.classList.remove("active");
    btSearchMobile.style.visibility = "visible";
  }
});

document.querySelectorAll(".mobile-menu-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".mobile-menu-container").classList.remove("active");
    document.querySelector(".btSearchMobile").style.visibility = "visible";
  });
});

document.addEventListener("click", (event) => {
  document.querySelectorAll(".data-more").forEach((more) => {
    more.classList.remove("active");
  });

  const card = event.target.closest(".data-card");
  if (card) {
    card.querySelector(".data-more").classList.add("active");
  }
});
