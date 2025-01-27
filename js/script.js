const cards = [
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorM7lYrMmrpxKDuhpfWG0SPZ0lOQuCD5oZg&s",
    title: "Airi",
    description:
      "He is a hero in the Assassin position who has the ability to attack enemies quickly and with high agility.",
    skill1:
      "<strong>Dragon Shuriken</strong> Airi throws shurikens at enemies in front of her, dealing physical damage.",
    skill2:
      "<strong>Swift Shadow</strong> Airi dashes to a designated location, dealing physical damage. This skill can be used 3 times before going on cooldown.",
    skill3:
      "<strong>Ryo no Ikari</strong> Airi leaps into the air and summons a dragon to attack, dealing physical damage and slowing enemies, then dealing additional damage and stunning them (each attack increases armor). While using the skill, she is immune to status effects and her movement speed is increased by 100% for 2.5s; Attack Speed ​​is increased by 30% for 5s.",
    imgSkill1:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/a16f74b7c6f562bbb0accf46e8e51cb2.png",
    imgSkill2:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/fbdca1ec716808187d9f40ce393a45db.png",
    imgSkill3:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/1578002481ea329e2ff1be25b409b79e.png",
  },
  {
    imgSrc:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/c3a17b5b1027d89e1160cc618de83aac.png",
    title: "Hayate",
    description:
      "With his outstanding attack speed and high evasion ability, he is a hero that can deal massive damage from a distance and has special abilities that allow him to run away or attack enemies effectively.",
    skill1:
      "<strong>Shueriken Toss</strong> Hayate moves 10% faster and throws shurikens in a target direction. Each hit deals 125(+30% AD) physical damage. (This skill is affected by his passive and certain items.) Additionally, the shurikens pierce non-hero enemies and are 20% weaker each time they pierce an enemy (maximum 40%). (Each hit restores 10 Energy to Hayate.) Hayate attacks 5/7/9 times based on 0%/75%/150% Attack Speed.",
    skill2:
      "<strong>Shadowstep</strong> Hayate instantly disappears to a target location. Passive: Hayate deals 10% increased damage and moves 10% faster if there are nearby enemy heroes.",
    skill3:
      "<strong>Kunai Blitz</strong> Hayate teleports to a target location and throws daggers around him. Each attack deals 115(+27% AD) physical damage. This skill is affected by his passive and certain items. Hayate will throw daggers 10/13/16 times based on 0%/75%/150% attack speed.",
    imgSkill1:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/18d858285848f0ea0f69dc19607173c7.png",
    imgSkill2:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/16b044b9ad9f381c961a61208de9148e.png",
    imgSkill3:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/833f783db8d15e27964e3e8f5be4a6f1.png",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQgd8iIrk472LJ6clGjsmPvejWxSIimjDgw&s",
    title: "Marja",
    description:
      "Positioned as Fighter/Assassin, she excels in dealing heavy damage and recovering high HP.",
    skill1:
      "<strong>Dark Pulse</strong> Marja releases a wave of energy that deals magic damage and reduces enemies' Movement Speed ​​by 40% for 2 seconds.",
    skill2:
      "<strong>Soul Devourer</strong> Marja summons a spirit demon to hunt down enemies, dealing magic damage to them.",
    skill3:
      "<strong>Ghostwalk</strong> Marja transforms into a spirit, gaining 30% Movement Speed ​​and becoming Untargetable for 2 seconds. She also deals magic damage to nearby enemies every time she enters and exits Ghostwalk.",
    imgSkill1:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/bcce63d82351d61a572a0371213e14ad.png",
    imgSkill2:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/ad6da60da1d49d619d7c24fa55187c23.png",
    imgSkill3:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/5113dd262cfb18b723836013306ff03e.png",
  },
  {
    imgSrc:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/836085a43f0a18d209c4ed1c36650392.jpg",
    title: "Omen",
    description:
      "Position: Fighter/Offlane and has a strong advantage in Duel 1v1 with skills that increase attack speed, blood sucking and locking on targets so they can't escape.",
    skill1:
      "<strong>Thirst</strong> Every time he hits an enemy with a normal attack, he gains 1 Thirst. After reaching full strength, Omen gains 60 Movement Speed ​​and 25% Attack Speed ​​for 5 seconds. Each normal attack deals additional true damage and reduces the cooldowns of Death's Beckon and Untouchable by 1 second. Omen has a chance to attack twice, dealing 50% less damage on the second attack.",
    skill2:
      "<strong>Untouchable</strong> Omen enters a state of paranoia, reducing incoming damage and increasing his Movement Speed ​​for 2 seconds. Omen can also reflect physical damage from normal attacks back to his attackers, reducing their Movement Speed ​​by 50%. The reflected damage is still affected by items and buffs. (Only one enemy attack can be reflected.)",
    skill3:
      "<strong>Death's Embrace</strong> Omen dashes in a target direction, dealing physical damage to the first enemy hero he hits. He then summons a cursed sword to the ground, rooting enemies in the area for 5 seconds (rooted enemies take reduced damage).",
    imgSkill1:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/dda03684c592e94ddf4bf2449e5a57d7.png",
    imgSkill2:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/ac1b201178e337edf2513b48da320d49.png",
    imgSkill3:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/c4adafcb435ca73a6abc8ad01c47b9d5.png",
  },
  {
    imgSrc:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/a52ba1b898d9cf6f491c7b44fa3c230d.jpg",
    title: "Volkath",
    description:
      "He is a fighter/tank hero with the special ability to temporarily enter invulnerability, making him a very strong initiator and damage dealer in the late game.",
    skill1:
      "<strong>Death Sweep</strong> Volkath sweeps around him, dealing 350 (+130% bonus physical damage) physical damage. If the target is marked with Doom 3 times, the damage is increased by 40% and the target is stunned for 1 second.",
    skill2:
      "<strong>Excrution</strong> Volkath fires a demonic claw, dealing 260 (+60% bonus physical attack) physical damage, slowing and gaining vision of the target for 5 seconds. If this skill hits an enemy, it can be cast again to target them, dealing 400 (+110% bonus physical attack) physical damage + 16% of lost HP (the cooldown is immediately lifted if the target dies from this skill).",
    skill3:
      "<strong>Ultima</strong> Volkath removes the status effect and enters Overlord mode for 8s, reducing his attack speed by 5%. Attacks deal 20 (+100% bonus Physical Damage) physical damage. Repeated casts knock enemies back, dealing 300 (+160% bonus Physical Damage) physical damage, and entering Doom Lord mode for 3.5s, granting 80% attack speed, 30% movement speed, and immunity to death. Upon ending, he restores 25% of his max HP. Dark Might: Hitting a hero in Overlord form increases the duration of Doom Lord by 0.5s (max 3 times).",
    imgSkill1:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/59b49b9c05c659813d2042dbdc509234.png",
    imgSkill2:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/47a5033fc5fe725061668da7825aef63.png",
    imgSkill3:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/2a54d9bfe17ebdb3805869e68e3f6a0c.png",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIjQDlFn-9sotkB2bRzD45VxJ7jFkdB4Q_1Q&s",
    title: "Maloch",
    description:
      "It has strong attack power and is good at sucking blood from enemies.",
    skill1:
      "<strong>Cleave</strong> Maloch swings his sword, dealing physical damage. If he hits a hero, he empowers his weapon, dealing true damage. Additionally, for every hero he hits, he restores 6% (maximum 24%) of their missing health.",
    skill2:
      "<strong>Souleater</strong> Maloch steals the souls of nearby enemies, dealing minor physical damage and slowing their movement speed by 30% for 3s. The stolen souls become a shield for him. The Soul Shield can reduce damage from up to 4 souls.",
    skill3:
      "<strong>Shock</strong> Maloch places a mark on his target area, then leaps down and attacks from above, knocking all enemies in range up, dealing physical damage and slowing enemies entering or leaving the area.",
    imgSkill1:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/89b1a8af1c82c586b52a8ad3e9460208.png",
    imgSkill2:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/a288a18590596e0fb6839ec399bf415c.png",
    imgSkill3:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/3a84b8ad4c359dabbbe5557df2b3ce9d.png",
  },
  {
    imgSrc:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/f5cf01741d36b6ae8525162c214a705c930645473.jpg",
    title: "Veera",
    description:
      "She is a Mage hero with strong magic damage and can stun enemies.",
    skill1:
      "<strong>Hell Bat</strong> Veera releases a Hell Bat in a straight line, dealing magic damage.",
    skill2:
      "<strong>Kisses</strong> Veera sends out a kiss, dealing magic damage and stunning enemies for 1.5 seconds.",
    skill3:
      "<strong>Little Friends</strong> Veera summons her demon minions to attack nearby enemies, dealing magic damage each, but dealing 50% damage if the demon hits the same enemy a second time.",
    imgSkill1:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/4d17b86af03e801609e0f1156b4b5d38.png",
    imgSkill2:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/cd575b2ee50a9eaec6df8abc4dc7925f.png",
    imgSkill3:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/bc15f2dcf3c14873f69da89d0d98032f.png",
  },
  {
    imgSrc:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/3e2709c4727c28ce77fe1639ca27007f998447558.png",
    title: "Nakroth",
    description:
      "Nakroth is a hero that requires high skill, focusing on good timing in and out. If played well, he can carry the team, but if he doesn't enter well, he can easily die for nothing.",
    skill1:
      "<strong>Jury Fury</strong> Nakroth dashes forward and knocks the target up, dealing physical damage. This skill can be used again within 5 seconds after first use.",
    skill2:
      "<strong>Dominating</strong> Nakroth leaps back and turns his normal attacks within 3 seconds into sweeping attacks, dealing physical damage.",
    skill3:
      "<strong>Executioner's Blade</strong> Nakroth slashes enemies in range, dealing physical damage each time and eliminating any status effects while casting. His final attack knocks enemies up.",
    imgSkill1:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/2e689fdebc18294b10997b9d9b9bdf9a.png",
    imgSkill2:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/4026121195a08e77f390f0c1f4731f07.png",
    imgSkill3:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/c39a862242437a78ee99509e05bb5bcd.png",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZqF9-J0wCFQnBfcNS2XwbHq2Rx3aQDIUSnQ&s",
    title: "Kriknak",
    description:
      "Kriknak is an easy character to play and has good rank-up, especially for those who like a high-damage, agile Assassin.",
    skill1:
      "<strong>Terrifying Plague</strong> Kriknak commands his larva to attack an enemy, dealing physical damage and marking them with a mark. If the target is hit again by Kriknak, the mark will explode, dealing magic damage equal to 10% of his maximum health, reducing the cooldown of this skill by 3 seconds, and restoring 35 mana to himself.",
    skill2:
      "<strong>Evil Tentacles</strong> Kriknak dashes in that direction, dealing physical damage to all enemies in his path. Additionally, after each enemy hero he hits with this skill, he heals himself.",
    skill3:
      "<strong>Fury of Flying Locusts</strong> Kriknak soars for 6 seconds, gaining a short burst of Movement Speed. If he uses this skill again while soaring, he dashes to a target location, dealing AoE Physical Damage and slowing enemies.",
    imgSkill1:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/0521143817617364c0a724a227803f0e.png",
    imgSkill2:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/441ead32bc2bdfa13be7b1b1ef56f8a5.png",
    imgSkill3:
      "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/987d105966a21cd2a8a20a2bc0b41cf5.png",
  },
];

let currentPage = 1;
const cardsPerPageDesktop = 7;
const cardsPerPageMobile = 5;
const isMobile = window.innerWidth <= 879;
const cardsPerPage = isMobile ? cardsPerPageMobile : cardsPerPageDesktop;

function renderCards() {
  const container = document.querySelector(".data-content");
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const cardsToDisplay = cards.slice(startIndex, endIndex);

  container.innerHTML = "";
  cardsToDisplay.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("data-card");
    cardElement.innerHTML = `
        <div class="data-more">
            <a class="btMore" data-index="${index}">more</a>
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

  const btMore = event.target.closest(".btMore");
  if (btMore) {
    const cardIndex = event.target.getAttribute("data-index");
    const indexCurrent =
      parseInt(cardIndex) +
      (parseInt(currentPage) - 1) * parseInt(cardsPerPage);
    detailCard(indexCurrent);
  }
});

function detailCard(cardIndex) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("detail-card");
  cardElement.innerHTML = `
        <div class="detail-header">
          <h2>${cards[cardIndex].title}</h2>
          <img src="${cards[cardIndex].imgSrc}" alt="imgSrc">
          <p>${cards[cardIndex].description}</p>
        </div>
        <div class="detail-skill">
            <img src="${cards[cardIndex].imgSkill1}" alt="skill1">
            <p>${cards[cardIndex].skill1}</p>
        </div>
        <div class="detail-skill">
            <img src="${cards[cardIndex].imgSkill2}" alt="skill2">
            <p>${cards[cardIndex].skill2}</p>
        </div>
        <div class="detail-skill">
            <img src="${cards[cardIndex].imgSkill3}" alt="skill3">
            <p>${cards[cardIndex].skill3}</p>
        </div>
        <div class="btCloseDetail">
          <button>Close</button>
        </div>
    `;
  var container = document.querySelector(".detail-container");
  container.classList.add("active");
  container.appendChild(cardElement);

  const closeButton = cardElement.querySelector(".btCloseDetail button");
  closeButton.addEventListener("click", function () {
    container.removeChild(cardElement);
    container.classList.remove("active");
  });
}
