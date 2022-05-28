const projects = document.querySelector("#projects")

results = fetch("https://api.github.com/users/stoltenbergnathan/repos", {
    headers: {
        "Accept": "application/vnd.github.v3+json"
    }
}).then(body => body.json()).then(results => {
    results.forEach(repo => {
        console.log(repo)

        projects.innerHTML += repo.name + '<br/>' + repo.description + '<br/>' + repo.html_url + '<br/>' + new Date(repo.created_at).toDateString() + '<br />'
    });
})
