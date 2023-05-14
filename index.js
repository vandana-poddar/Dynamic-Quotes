const quote =document.getElementById('quotes');
const author =document.getElementById('author');
const refresh =document.getElementById('newQ');
const getQuotes = async ()=>{
 const api = "https://type.fit/api/quotes";
    let data = await fetch(api);
    let realdata = await data.json();
    let randomNumber = Math.floor(Math.random()*1644);
    quotesData = realdata[randomNumber];
    quote.innerText = quotesData.text;
    quotesData.author == null?author.innerText = 'UNknown':
                         author.innerText = quotesData.author;
} 
refresh.addEventListener("click",getQuotes);