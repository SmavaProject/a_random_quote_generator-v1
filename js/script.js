/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * array that stores quotes
 * @type {array}
***/

let quotes = [];
quotes.push({}, {}, {}, {}, {}, {}, {}, {}, {});
quotes[0] = {
    quote: "If opportunity does not knock, build a door",
    source: "Milton Berle"
};
quotes[1] = {
    quote: "A goal is a dream with a deadline",
    source: "Napoleon Hill",
    citation: "Success Through a Positive Mental Attitude",
    year: 1959
};
quotes[2] = {
    quote: "Every exit is an entry somewhere else",
    source: "Tom Stoppard"
};
quotes[3] = {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts",
    source: "Winston Churchill",
    tags: "politics"
};
quotes[4] = {
    quote: "If you're trying to create a company, it is like baking a cake. You have to have all the ingredients in the right proportion",
    source: "Elon Musk",
    tags: "business"
};
quotes[5] = {
    quote: "Keep your face to the sunshine and you cannot see a shadow",
    source: "Helen Keller",
    year: 2017
};
quotes[6] = {
    quote: "Once you choose hope, anything’s possible",
    source: "Christopher Reeve"
};
quotes[7] = {
    quote: "We can change our lives. We can do, have, and be exactly what we wish",
    source: "Tony Robbins",
    citation: "Seminar: How to become happy and successful"
};
quotes[8] = {
    quote: "Never waste a good crisis",
    source: "Winston Churchill",
    tags: "politics, business"
}

/***
 * array of colors
 * @type {string[]}
 */

const colors = ['red', 'orange', 'blue', 'navy', 'lightgray', 'yellow',
    'violet', 'lightblue', 'lightgreen', 'green'];

/***
 * `function that generates random quotes
 * @return {number}
***/

function getRandomQuote(){
    const randomNumber = Math.round(Math.random() * (quotes.length-1));
    return quotes[randomNumber];
}

/***
 * function that prints quotes
 * @return {string}
***/

function printQuote() {
    const randomQuote = getRandomQuote();
    let htmlString = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;
    if (typeof randomQuote.citation !== "undefined"){
        htmlString += `<span class="citation">${randomQuote.citation}</span>`;
    }
    if (typeof randomQuote.year !== "undefined"){
        htmlString += `<span class="year">${randomQuote.year}</span>`;
    }
    if (typeof randomQuote.tags !== "undefined"){
        htmlString += `<span class="tags">${randomQuote.tags}</span>`;
    }
    htmlString+=`</p>`;
    document.getElementById('quote-box').innerHTML = htmlString;
    changeBackgroundColor();
    return htmlString;
}

/***
 * function that changes the background color
 */

function changeBackgroundColor(){
    const randomNumber = Math.round(Math.random() * (colors.length-1));
    const randomColor = colors[randomNumber];
    document.getElementsByTagName("BODY")[0].style.backgroundColor= randomColor;
}

/***
 * function that automatically changes quotes and background color
 */

setInterval(printQuote, 5000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);