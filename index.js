var cheerio = require("cheerio");
var request = require("request");
function handlerequest(err,data){
    if(err){
        console.log("Error in Request");
    }
    // you need to load the html file in cheerio
    var $ = cheerio.load(data.body); // Dom tree using html code
    var popular_repo = [];
    var repos = $(".lh-condensed").text().trim();
    console.log(repos);
}
request("https://github.com/trending/javascript?since=daily&spoken_language_code=en",handlerequest);