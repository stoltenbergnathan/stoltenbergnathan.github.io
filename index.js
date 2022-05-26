const descriptions = {
  Viewpoint: [
    "Viewpoint was my first ever internship. " +
      "While working here as an intern I wrote QA tests for our software and manage an Azure CI/CD pipeline. " +
      "I also wrote a POC software to compare documents with different PDF versions for their structural integerity. " +
      "During my last couple months I started working on cleanup scripts to remove uneccesary resources and reduce the " +
      "company's expenses",
    "Skills",
  ],
  Tripwire: ["T", "skills"],
};

const previousWorks = document.querySelectorAll(".prevwork");
const previousWorksDescription = document.querySelector("#prevworkdesc");
const previousWorksSkills = document.querySelector("#prevworkskills");

previousWorks.forEach((work) =>
  work.addEventListener("mouseenter", (event) => {
    let workName = event.target.innerHTML;
    previousWorksDescription.innerHTML = descriptions[workName][0];
    previousWorksSkills.innerHTML = descriptions[workName][1];
  })
);
