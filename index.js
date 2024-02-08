document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    {
      title: "Gender Reveal",
      description:
        "This website was created to share the exciting moment of revealing the gender of our baby.",
      link: "https://christianblackwell.github.io/Gender-Reveal/",
      image: "assets/gender-reveal.png",
    },
    {
      title: "Simon Game",
      description:
        "Enjoy the classic Simon game! Test your memory by repeating a sequence of colors. How far can you go?",
      link: "https://christianblackwell.github.io/Simon-Game/",
      image: "assets/simon-game.png",
    },
    {
      title: "Drum Kit",
      description:
        "This project is a simple web application that simulates a drum kit.",
      link: "https://christianblackwell.github.io/Drum-Kit-Challenge/",
      image: "assets/drum-kit.png",
    },
    {
      title: "Dicee Game",
      description:
        "Experience a web-based two-player dice game. Roll the virtual dice, compare results, and discover the winner or a draw!",
      link: "https://christianblackwell.github.io/Dicee-Challenge/",
      image: "assets/dice-game.png",
    },
    // Add more projects as needed
  ];

  const photoContainer = document.getElementById("photoContainer");
  const projectInfo = document.getElementById("projectInfo");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentIndex = 0;

  // Dynamically create project elements
  projects.forEach((project, index) => {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project");
    projectContainer.innerHTML = `<img src="${project.image}" alt="${project.title}" class="photo">`;
    if (index === currentIndex) {
      projectContainer.classList.add("active");
      updateProjectInfo(project);
    }
    photoContainer.appendChild(projectContainer);
  });

  // Add event listeners for navigation
  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrevious);

  function showNext() {
    if (currentIndex < projects.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  }

  function showPrevious() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = projects.length - 1;
    }
    updateCarousel();
  }

  function updateCarousel() {
    const projects = document.querySelectorAll(".project");
    projects.forEach((project, index) => {
      if (index === currentIndex) {
        project.classList.add("active");
        updateProjectInfo(projects[currentIndex]);
      } else {
        project.classList.remove("active");
      }
    });
  }

  function updateProjectInfo(project) {
    projectInfo.querySelector("#projectTitle").textContent =
      projects[currentIndex].title;
    projectInfo.querySelector("#projectDescription").textContent =
      projects[currentIndex].description;
    projectInfo.querySelector("#projectLink").href =
      projects[currentIndex].link;
  }
});
