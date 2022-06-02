const descriptions = {
  Viewpoint: [
    `Dates Employeed: June 2021 - December 2021
      <p>
      Viewpoint was the first software company I worked at. 
      Here I used Selenium to run UI tests while also using Azure resources to manage system cleanup
      </p>`,
    `Skills Gained
      <ul>
        <li>Selenium Testing</li>
        <li>Azure Pipelines</li>
        <li>Azure Cloud Systems</li>
        <li>C#</li>
        <li>SQL</li>
      </ul>`,
  ],
  Tripwire: [
    `Dates Employeed: January 2022 - June 2022
      <p>
      My second and last internship before graduating. Here I worked as a DevOps intern managing
      a full-stack application. I also migrated this application to a K8s cluster
      </p>`,
    `Skills Gained
      <ul>
        <li>React</li>
        <li>FastApi</li>
        <li>Graphql</li>
        <li>Docker</li>
        <li>Kubernetes</li>
      </ul>`,
  ],
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
      projects.innerHTML +=
        `<div class="githubProject"><a href='${repo.html_url}' target=blank><h6>${repo.name}</h6></a>` +
        "<br/>" +
        repo.description +
        "<br/>" +
        new Date(repo.created_at).toDateString() +
        "</div>";
    });
  });

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
const root = document.documentElement;
if (darkThemeMq.matches) {
  root.style.setProperty("--sidebar-color", "#4b2626");
  root.style.setProperty("--main-bg-color", "#2d2d2d");
  root.style.setProperty("--accent1-color", "#585260");
  root.style.setProperty("--accent2-color", "#707070");
  root.style.setProperty("--main-text-color", "#ffffff");
} else {
  root.style.setProperty("--sidebar-color", "#8D818C");
  root.style.setProperty("--main-bg-color", "#E9EBF8");
  root.style.setProperty("--accent1-color", "#A5A299");
  root.style.setProperty("--accent2-color", "#B4B8C5");
  root.style.setProperty("--main-text-color", "#1e1b1e");
}
darkThemeMq.addEventListener("change", (e) => {
  if (e.matches) {
    root.style.setProperty("--sidebar-color", "#4b2626");
    root.style.setProperty("--main-bg-color", "#2d2d2d");
    root.style.setProperty("--accent1-color", "#585260");
    root.style.setProperty("--accent2-color", "#707070");
    root.style.setProperty("--main-text-color", "#ffffff");
  } else {
    root.style.setProperty("--sidebar-color", "#8D818C");
    root.style.setProperty("--main-bg-color", "#E9EBF8");
    root.style.setProperty("--accent1-color", "#A5A299");
    root.style.setProperty("--accent2-color", "#B4B8C5");
    root.style.setProperty("--main-text-color", "#1e1b1e");
  }
});

// :root {
//   --sidebar-color: #4b2626;
//   --main-bg-color: #2d2d2d;
//   --accent1-color: #585260;
//   --accent2-color: #707070;
//   --main-text-color: #ffffff;
// }
