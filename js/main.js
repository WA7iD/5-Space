"use strict";

// ====== 💥 MAIN VARS AREA DON"T TOUCH 💥===== //
const navLinks = document.querySelectorAll(".nav__link");
const allSections = document.querySelectorAll(".sections__holder section");

//===== Planet Vars
const planetLinks = document.querySelectorAll(".planet__link");
const planetName = document.querySelector(".planet__name");
const planetText = document.querySelector(".planet__text");
const planetDistance = document.getElementById("distance");
const planetDays = document.getElementById("days");
const planetImgContainer = document.querySelector(".planet__img");

//===== Crew Vars
const crewLinks = document.querySelectorAll(".crew__btns");
const crewPosition = document.querySelector(".crew__pos");
const crewName = document.querySelector(".crew__name");
const crewDesc = document.querySelector(".crew__discrebtion");
const crewImg = document.querySelector(".crew__img img");

//===== Tech Vars
const techLinks = document.querySelectorAll(".tech__btns");
const techName = document.querySelector(".tech__name");
const techDesc = document.querySelector(".tech__discrebtion");
const techImg = document.querySelector(".tech__img img");

// ===== MAIN FUNCTION FOR INITIAT SECTIONS ===== //
const goToSlide = function (slide) {
  //==== 1- Sort Sections ==== //
  allSections.forEach(function (section, i) {
    section.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
//==== 2- Give Chossen Link Active ====/
navLinks.forEach((e, linkNumber) => {
  e.addEventListener("click", () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    e.classList.add("active");
    goToSlide(linkNumber);
  });
});

//===Show the chossen Section===//

goToSlide(0);

// ====FOR THE MOON ONLY
const checkMoon = function () {
  if (planetImgContainer.classList.contains("moon")) {
    planetImgContainer.innerHTML = "<div></div>";
  }
};
checkMoon();

// ===== Plant Links
//All planets Info
const planetsInfo = {
  mars: {
    name: "MARS",
    describe:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. km",
    days: "9 months",
    img: "images/mars.png",
  },
  europa: {
    name: "EUROPA",
    describe:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. km",
    days: "3 years",
    img: "images/europa.png",
  },
  titan: {
    name: "TITAN",
    describe:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    days: "7 years",
    img: "images/titan.png",
  },
};
planetLinks.forEach((link) => {
  link.addEventListener("click", function () {
    planetLinks.forEach(function (e) {
      e.classList.remove("active");
    });
    link.classList.add("active");
    if (link.textContent == "MOON") {
      planetImgContainer.classList.add("moon");
      checkMoon();
    } else {
      planetImgContainer.classList.remove("moon");
      planetImgContainer.innerHTML = "<img />";
      const planetImg = document.querySelector(".planet__img img");
      let activePlanet = link.textContent.toLowerCase();
      planetName.textContent = planetsInfo[activePlanet].name;
      planetText.textContent = planetsInfo[activePlanet].describe;
      planetDistance.textContent = planetsInfo[activePlanet].distance;
      planetDays.textContent = planetsInfo[activePlanet].days;
      planetName.textContent = planetsInfo[activePlanet].name;
      planetImg.src = `${planetsInfo[activePlanet].img}`;
    }
  });
});

// ===== Crew LINKS
// All Crew Info
const crewInfo = [
  {
    img: "images/crew4.png",
    position: "Commander",
    name: "Douglas Hurley",
    info: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    img: "images/crew1.png",
    position: "Mission Specialist ",
    name: "MARK SHUTTLEWORTH",
    info: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    img: "images/crew3.png",
    position: "PILOT",
    name: "Victor Glover",
    info: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  },
  {
    img: "images/crew2.png",
    position: "Flight Engineer",
    name: "Anousheh Ansari",
    info: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  },
];

crewLinks.forEach((link, i) => {
  link.addEventListener("click", function () {
    crewLinks.forEach(function (e) {
      e.classList.remove("active");
    });
    link.classList.add("active");
    crewPosition.textContent = crewInfo[i].position;
    crewName.textContent = crewInfo[i].name;
    crewDesc.textContent = crewInfo[i].info;
    crewImg.src = `${crewInfo[i].img}`;
  });
});

// ===== Technology LINKS
// All Tech Info
const techInfo = [
  {
    img: "images/techno.jpg",
    name: "LAUNCH VEHICLE",
    info: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    img: "images/tech2.jpg",
    name: "SPACEPORT",
    info: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    img: "images/tech3.jpg",
    name: "SPACE CAPSULE",
    info: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];
techLinks.forEach((link, i) => {
  link.addEventListener("click", function () {
    techLinks.forEach(function (e) {
      e.classList.remove("active");
    });
    link.classList.add("active");
    console.log(i, techInfo[i]);
    techName.textContent = techInfo[i].name;
    techDesc.textContent = techInfo[i].info;
    techImg.src = `${techInfo[i].img}`;
  });
});
