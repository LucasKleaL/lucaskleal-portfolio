
const languagesArray = [
    ["HTML", "I like html for the simple way <br> to the structure the project.", "80%"],
    ["CSS", "For me css is the web piece where <br> I can release my design creativity.", "70%"],
    ["Javascript", "Javascript is my favourite language on the moment, <br> is incredible his integration and possibilities.", "70%"],
    ["jQuery", "jQuery is the most useful and productive <br> framework for Javascript on my opinion.", "60%"],
    ["ReactJS", "It is currently the technology that <br> I most want to develop my skills.", "20%"],
    ["PHP", "Is the first backend language what I had <br> contact, is extremely simple to interact with SQL.", "40%"],
    ["Python", "My first programming language, <br> where I learned logical thinking.", "40%"],
    ["Java", "The language where I learned the object orientation <br> and projects patterns, very useful for biggest projects.", "50%"],
    ["SQL", "My first learned database structure. I like the way <br> what the data is padronized and stored.", "60%"]
];

$(document).ready(function() {

    $(".language-icon").hover(function() {

        console.log("hover")

        var getId = this.id;

        for (var i = 0; i < languagesArray.length; i++) {

            var position = languagesArray[i][0];

            if (getId.toLowerCase() === position.toLowerCase()) {
                $("#languageTitle").text(languagesArray[i][0]);
                $("#languageDesc").empty();
                $("#languageDesc").append(languagesArray[i][1]);
            }

        }

    })

});