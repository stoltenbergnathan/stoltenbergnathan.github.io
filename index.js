const descriptions = {
  Viewpoint: ["June 2021 - December 2021", "Skills"],
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
const projects = document.querySelector("#projects");

results = fetch("https://api.github.com/users/stoltenbergnathan/repos", {
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
})
  .then((body) => body.json())
  .then((results) => {
    results.forEach((repo) => {
      console.log(repo);

      projects.innerHTML +=
        `<a href='${repo.html_url}' target=blank>${repo.name}</a>` +
        "<br/>" +
        repo.description +
        "<br/>" +
        new Date(repo.created_at).toDateString() +
        "<br /><br />";
    });
  });
