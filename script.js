let kanyeQuote = document.querySelector("#kanye-quote")
let tweet = document.querySelector("#tweet")
tweet.addEventListener("click", fetchQuote)
fetchQuote()

function fetchQuote() {
    fetch("https://api.kanye.rest/")
        .then((response) => {
            return response.json()
        }).then((transformedData) => {
            console.log(transformedData)
            kanyeQuote.innerText = transformedData.quote
        })
        .catch(err => console.log('rejected', err))
    getRandData()
    timeAndDate()
}


function getRandData() {
    const retweets = document.querySelector("#retweets");
    const comments = document.querySelector("#comments");
    const likes = document.querySelector("#likes");

    let randR = Math.floor((Math.random() + 2) * 100) / 10;
    let randC = Math.floor((Math.random() + 1) * 100) / 10;
    let randL = Math.floor((Math.random() + 3) * 100) / 10;

    retweets.textContent = randR + "K";
    comments.textContent = randC + "K";
    likes.textContent = randL + "K";
}

function timeAndDate() {
    const time = document.querySelector("#time");
    const date = document.querySelector("#date");

    const d = new Date();
    let month = d.getMonth();
    let day = d.getDate();
    let year = d.getFullYear()
    hours = d.getHours();
    minutes = d.getMinutes();

    date.textContent = `${day}.${month + 1}.${year-2000}`;
    time.textContent = `${hours}:${minutes}`
}