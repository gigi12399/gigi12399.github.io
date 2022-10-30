$(function () { 
    $.get("https://type.fit/api/quotes",function(res) { 
        var quotes = JSON.parse(res)
        //console.log(quotes)
        var randomNum = Math.floor(Math.random()* quotes.length);
        randomQuotes = quotes[randomNum];
        console.log(randomQuotes)
        $('h2#text').text(randomQuotes.text);
        $('p#author').text(`___${randomQuotes.author}`);
    })
    $('button#new').on('click',function () { 
        $.get("https://type.fit/api/quotes",function(res) { 
        var quotes = JSON.parse(res)
        //console.log(quotes)
        var randomNum = Math.floor(Math.random()* quotes.length);
        randomQuotes = quotes[randomNum];
        console.log(randomQuotes)
        $('h2#text').text(randomQuotes.text);
        $('p#author').text(`___${randomQuotes.author}`);
        })
    })
})