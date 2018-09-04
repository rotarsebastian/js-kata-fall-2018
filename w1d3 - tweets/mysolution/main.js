"use-strict";

const endpoint = "https://kea-alt-del.dk/twitter/api/";
const tweetContainer = document.querySelector("#tweet-container");
const tweetTemplate = document.querySelector("#tweet-template").content;

function fetchTweets() {
    fetch(endpoint)
        .then(e => e.json())
        .then(tweets => showTweets(tweets));
}
function showTweets(tweets) {
    console.log(tweets);
    tweets.statuses.forEach(showSingleTweet);

}
function showSingleTweet(tweet) {
    let clone = tweetTemplate.cloneNode(true);
    console.log(tweet);
    clone.querySelector(".tweet-user").textContent = "@" + tweet.user.name;
    clone.querySelector(".tweet-txt").textContent = tweet.text;
    tweetContainer.appendChild(clone);
}
fetchTweets();