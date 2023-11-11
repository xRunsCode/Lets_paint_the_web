let api="https://api.quotable.io/quotes/random?tags=love|happiness";
let quoteField=document.getElementById('quote-field');
let author=document.getElementById('author-box');
let quote="";



async function getQuote(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
         quote = await response.json();
        // console.log(quote[0]['content']);
        quoteField.innerHTML=quote[0]['content'];
        author.innerHTML=quote[0]['author'];
    } catch (e) {
        console.log('Error:', e);
    }
}

function tweet()
{
    let link="https://twitter.com/intent/tweet?text="+quote[0]['content'];
    window.open(link);
}



getQuote(api);
