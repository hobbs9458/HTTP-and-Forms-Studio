const form = document.getElementById('searchForm');

function setSearchEngine() {
    const userEngine = document.querySelector('input[name=engine]:checked');
    const userSearch = document.getElementById("searchBar");

    const actions = {
        google: "https://www.google.com/search",
        duckDuckGo: "https://duckduckgo.com/",
        bing: "https://www.bing.com/search",
        ask: "https://www.ask.com/web"
     };
    
    if(userEngine === null || userSearch.value === "") {
        window.alert("Error: You must select a search engine and search for something!");
    } else {
        const actionURL = actions[userEngine.value];
        form.setAttribute("action", actionURL);
    }
};

form.addEventListener("submit", (e) => {
    setSearchEngine();
});








