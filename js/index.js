
const languagesArray = [
    ["HTML", "I like html for the simple way <br> to the structure the project.", "80%", "html_wallpaper.jpg"],
    ["CSS", "For me css is the web piece where <br> I can release my design creativity.", "70%", "css_wallpaper.jpg"],
    ["Javascript", "Javascript is my favourite language on the moment, <br> is incredible his integration and possibilities.", "70%", "js_wallpaper.jpg"],
    ["jQuery", "jQuery is the most useful and productive <br> framework for Javascript on my opinion.", "60%", "jquery_wallpaper.jpg"],
    ["ReactJS", "It is currently the technology that <br> I most want to develop my skills.", "20%", "react_wallpaper.jpg"],
    ["PHP", "Is the first backend language what I had <br> contact, is extremely simple to interact with SQL.", "40%", "php_wallpaper.jpg"],
    ["Python", "My first programming language, <br> where I learned logical thinking.", "40%", "python_wallpaper.jpg"],
    ["Java", "The language where I learned the object orientation <br> and projects patterns, very useful for biggest projects.", "50%", "java_wallpaper.png"],
    ["SQL", "My first learned database structure. I like the way <br> what the data is padronized and stored.", "60%"]
];

const experiencePorcentage = [
    ["10%", "2.3rem"],
    ["20%", "4.6rem"],
    ["30%", "6.9rem"],
    ["40%", "9.2rem"],
    ["50%", "11.5rem"],
    ["60%", "13.8rem"],
    ["70%", "16.1rem"],
    ["80%", "18.4rem"],
    ["90%", "20.7rem"],
    ["100%", "23rem"]
];

$(document).ready(function() {

    $(".language-icon").hover(function() {

        console.log("hover")

        var getId = this.id;

        for (var i = 0; i < languagesArray.length; i++) {

            var position = languagesArray[i][0];

            if (getId.toLowerCase() === position.toLowerCase()) {

                $("#divSlider").css("background-image", "linear-gradient(#121212, rgba(0, 0, 0, 0.003) 50%, #121212), url(public/img/"+languagesArray[i][3]+")")
                $("#languageTitle").text(languagesArray[i][0]);
                $("#languageDesc").empty();
                $("#languageDesc").append(languagesArray[i][1]);

                for (var y = 0; y < experiencePorcentage.length; y++) {

                    if (languagesArray[i][2] === experiencePorcentage[y][0]) {
                        $("#experienceBar").attr("style", "width:"+experiencePorcentage[y][1]+";");
                    }

                }

            }

        }

    })

});