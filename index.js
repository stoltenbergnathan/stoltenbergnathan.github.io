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
