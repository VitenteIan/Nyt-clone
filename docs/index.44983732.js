//function fetchArticles(category = 'home') {
// const apiKey = 'SWNPdSOZk7cYd4ZsCloEo2aAgoCwg3Tp';
//const url = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${apiKey}`;
const menuBtn = document.querySelector(".menuBtn");
const mobileMenu = document.querySelector(".mobile");
menuBtn.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("hidden");
});
const navItems = document.querySelectorAll("nav ul li");
navItems.forEach((item)=>{
    item.addEventListener("click", ()=>{
        const category = item.textContent.toLowerCase();
        fetchArticles(category);
    });
});
const searchInput = document.querySelector(".inputSearch input");
const searchButton = document.querySelector(".inputSearch span");
function fetchArticles(category = "home") {
    const apiKey = "SWNPdSOZk7cYd4ZsCloEo2aAgoCwg3Tp";
    const url = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${apiKey}`;
    fetch(url).then((response)=>response.json()).then((data)=>{
        const articles = data.results;
        displayArticles(articles);
    }).catch((error)=>console.error("Error fetching data:", error));
}
function searchArticles(query) {
    const apiKey = "SWNPdSOZk7cYd4ZsCloEo2aAgoCwg3Tp";
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`;
    fetch(url).then((response)=>response.json()).then((data)=>{
        const articles = data.response.docs;
        displaySearchResults(articles);
    }).catch((error)=>console.error("Error fetching search results:", error));
}
function displayArticles(articles) {
    const main = document.querySelector("main");
    main.innerHTML = "";
    articles.forEach((article)=>{
        const card = document.createElement("div");
        card.classList.add("card");
        const img = document.createElement("img");
        if (article.multimedia && article.multimedia.length > 0) img.src = article.multimedia[0].url;
        else img.style.backgroundColor = "#6c757d";
        card.appendChild(img);
        const title = document.createElement("h4");
        title.textContent = article.title;
        card.appendChild(title);
        const desc = document.createElement("p");
        desc.classList.add("desc");
        desc.textContent = article.abstract;
        card.appendChild(desc);
        const articleDetails = document.createElement("div");
        articleDetails.classList.add("politics");
        const section = document.createElement("p");
        section.textContent = article.section;
        const spacer = document.createElement("span");
        spacer.textContent = "\u2022";
        const readMore = document.createElement("a");
        readMore.href = article.url;
        readMore.target = "_blank";
        readMore.textContent = "Read more";
        readMore.style.color = "#1a0dab";
        articleDetails.appendChild(section);
        articleDetails.appendChild(spacer);
        articleDetails.appendChild(readMore);
        card.appendChild(articleDetails);
        main.appendChild(card);
    });
}
function displaySearchResults(articles) {
    const main = document.querySelector("main");
    main.innerHTML = "";
    articles.forEach((article)=>{
        const card = document.createElement("div");
        card.classList.add("card");
        const img = document.createElement("img");
        if (article.multimedia && article.multimedia.length > 0) img.src = `https://www.nytimes.com/${article.multimedia[0].url}`;
        else img.style.backgroundColor = "#6c757d";
        card.appendChild(img);
        const title = document.createElement("h4");
        title.textContent = article.headline.main;
        card.appendChild(title);
        const desc = document.createElement("p");
        desc.classList.add("desc");
        desc.textContent = article.abstract;
        card.appendChild(desc);
        const articleDetails = document.createElement("div");
        articleDetails.classList.add("politics");
        const section = document.createElement("p");
        section.textContent = article.section_name;
        const spacer = document.createElement("span");
        spacer.textContent = "\u2022";
        const readMore = document.createElement("a");
        readMore.href = article.web_url;
        readMore.target = "_blank";
        readMore.textContent = "Read more";
        readMore.style.color = "#1a0dab";
        articleDetails.appendChild(section);
        articleDetails.appendChild(spacer);
        articleDetails.appendChild(readMore);
        card.appendChild(articleDetails);
        main.appendChild(card);
    });
}
window.onload = ()=>fetchArticles("home");

//# sourceMappingURL=index.44983732.js.map
