
const languagesArray = [
    ["HTML", "I like html for the simple way <br> to the structure the project.", "80%", "html_wallpaper.jpg"],
    ["CSS", "For me css is the web piece where <br> I can release my design creativity.", "70%", "css_wallpaper.jpg"],
    ["Javascript", "Javascript is my favourite language on the moment, <br> is incredible his integration and possibilities.", "70%", "js_wallpaper.jpg"],
    ["jQuery", "jQuery is the most useful and productive <br> Javascript library on my opinion.", "60%", "jquery_wallpaper.jpg"],
    ["ReactJS", "It is currently the technology that <br> I most want to develop my skills.", "20%", "react_wallpaper.jpg"],
    ["PHP", "Is the first backend language what I had <br> contact, is extremely simple to interact with SQL.", "40%", "php_wallpaper.jpg"],
    ["Python", "My first programming language, <br> where I learned logical thinking.", "40%", "python_wallpaper.jpg"],
    ["Java", "The language where I learned the object orientation <br> and projects patterns, very useful for biggest projects.", "50%", "java_wallpaper.png"],
    ["SQL", "My first learned database structure. I like the way <br> what the data is padronized and stored.", "60%", "sql_wallpaper.jpg"],
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

const projectsData = [
    ["CLOSE!", "0", "https://github.com/LucasKleaL/close", ["html", "css", "js", "jquery", "php", "sql"], "Completly platform for clothes/accesories e-commerce, integrated with postal send calculator, payment metods like paypal, inventory management and other functionalities."],
    ["KMFLIX", "1", "https://github.com/VitorCRF/KMFlix", ["html", "css", "js", "jquery", "php", "sql"], "KMFLIX is a stream platform made for academic work. Based on Netflix platform, we have implemented the principals functionalities like signup, login, series/movies dashboard, title description, filters, reproduction page and other minor functionalities."],
    ["Sleep Sounds", "2", "https://github.com/LucasKleaL/Sleep-Sounds", ["html", "css", "js", "jquery"], "Sleep Sounds is a white noise reproduction application based on PWA (Progressive Web Application) functionality."],
    ["MoveIt", "3", "https://github.com/LucasKleaL/MoveIt", ["css", "js", "reactjs", "typescript"], "MoveIt is a ReactJS application made for understanding of the basic concepts on React, like components and contexts. The basic idea behind of this app is time cycles on work. When the clock achieve 0 a simple challenge appear on the screen, if the user complete this, experience is obtained and the level up."],
    ["Word Counter", "4", "https://github.com/LucasKleaL/word-counter", ["html", "css", "js", "jquery"], "This is a simple website with a word counter."]
];

const projectsImgData = [
    ["close_home_wallpaper.png", "close_product_wallpaper.png", "close_cart_wallpaper.png"],
    ["kmflix_home_wallpaper.png", "kmflix_modal_wallpaper.png", "kmflix_login_wallpaper.png", "kmflix_account_wallpaper.png"],
    ["sleepsounds_home_wallpaper.png", "sleepsounds_about_wallpaper.png", "sleepsounds_share_wallpaper.png"],
    ["moveit_home_wallpaper.png"],
    ["wordcounter_home_wallpaper.png"]
];

$(document).ready(function() {

    printProject();

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

    function printProject() {

        var content = "";

        for (var i = 0; i < projectsData.length; i++) {
            content += '<div class="div-container-project">';
            content += '<div class="div-project-img">';
            content += '<img class="arrow-icon" id="buttonBack'+projectsData[i][0]+'" value="'+projectsData[i][1]+'" onclick="backProjectImg(this.id)" style="float: left;" src="public/icons/left_arrow_icon.png">';
            content += '<img class="img-project" id="imgProject'+projectsData[i][1]+'" value="0" src="public/img/projects_wallpapers/'+projectsImgData[i][0]+'">';
            content += '<img class="arrow-icon" id="buttonNext'+projectsData[i][0]+'" value="'+projectsData[i][1]+'" onclick="nextProjectImg(this.id)" style="float: right;" src="public/icons/right_arrow_icon.png">';
            content += '</div>';
            content += '<div class="div-project-attributes">';
            content += '<h1 class="h1-project-title">'+projectsData[i][0]+'</h1>';
            content += '<p class="p-project-desc">'+projectsData[i][4]+'</p>';
            content += '<h2 class="h2-project-desc-title">Maded with:</h2>';

            for (var y = 0; y < projectsData[i][3].length; y++) {

                if (projectsData[i][3][y] === "html") {
                    content += '<img class="language-icon-project" src="public/icons/html_icon.png">';
                }
                else if (projectsData[i][3][y] === "css") {
                    content += '<img class="language-icon-project" src="public/icons/css_icon.png" style="margin-left: 1rem;">';
                }
                else if (projectsData[i][3][y] === "js") {
                    content += '<img class="language-icon-project" src="public/icons/js_icon.png" style="margin-left: 1rem;">';
                }
                else if (projectsData[i][3][y] === "jquery") {
                    content += '<img class="language-icon-project" src="public/icons/jquery_icon.png" style="margin-left: 1rem;">';
                }
                else if (projectsData[i][3][y] === "reactjs") {
                    content += '<img class="language-icon-project" src="public/icons/react_icon.png" style="margin-left: 1rem;">';
                }
                else if (projectsData[i][3][y] === "typescript") {
                    content += '<img class="language-icon-project" src="public/icons/typescript_icon.png" style="margin-left: 1rem;">';
                }
                else if (projectsData[i][3][y] === "php") {
                    content += '<img class="language-icon-project" src="public/icons/php_icon.png" style="margin-left: 1rem;">';
                }
                else if (projectsData[i][3][y] === "python") {
                    content += '<img class="language-icon-project" src="public/icons/python_icon.png" style="margin-left: 1rem;">';
                }
                else if (projectsData[i][3][y] === "java") {
                    content += '<img class="language-icon-project" src="public/icons/java_icon.png" style="margin-left: 1rem;">';
                }
                else if (projectsData[i][3][y] === "sql") {
                    content += '<img class="language-icon-project" src="public/icons/sql_icon.png" style="margin-left: 1rem;">';
                }

            }

            content += '<h2 class="h2-project-desc-title">GitHub:</h2>';
            content += '<a class="a-link-project-desc" href="'+projectsData[i][2]+'">'+projectsData[i][2]+'</a>';
            content += '</div>';
            content += '</div>';

            $(".div-some-projects").append(content);

            content = "";

        }

    }

});

function nextProjectImg(id) {

    var getValue = document.getElementById(id).getAttribute("value");
    var getImgValue = parseInt(document.getElementById("imgProject"+getValue).getAttribute("value"));
    var index = parseInt(getImgValue);

    console.log("index: "+index);

    for (var i = 0; i < projectsImgData.length; i++) {

        if (projectsImgData[getValue][index] === projectsImgData[i][index]) {

            console.log("entrou no primeiro if");

            if (projectsImgData[i].length <= index) {
                console.log("entrou if de zerar index")
                index = 0;
                getImgValue = 0;
                $("#imgProject"+getValue).attr("src", "public/img/projects_wallpapers/"+projectsImgData[getValue][index]);
                $("#imgProject"+getValue).attr("value", 0);
            }
            else {
                console.log("mudando imagem, proxima: "+parseInt(getImgValue+1))
                $("#imgProject"+getValue).attr("src", "public/img/projects_wallpapers/"+projectsImgData[getValue][index+1]);
                $("#imgProject"+getValue).attr("value", getImgValue+1);
            }

        }

    }

}

function backProjectImg(id) {

    var getValue = document.getElementById(id).getAttribute("value");
    var getImgValue = parseInt(document.getElementById("imgProject"+getValue).getAttribute("value"));
    var index = getImgValue - 1;

    $("#imgProject"+getValue).attr("src", "public/img/projects_wallpapers/"+projectsImgData[getValue][index]);
    $("#imgProject"+getValue).attr("value", getImgValue-1);

}