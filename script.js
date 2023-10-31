let buttontask = document.getElementById("buttontask");
let buttonweather = document.getElementById("buttonweather");
let buttonnews = document.getElementById("buttonnews");
let compactcover = document.querySelector(".compactcover");
let todoappdiv = document.querySelector(".todoappdiv");
let weatherappdiv = document.querySelector(".weatherappdiv");
let newsappdiv = document.querySelector(".newsappdiv");
let footer = document.querySelector(".footer");
let calendar = document.querySelector(".calendar");
let collapsecompact = document.getElementById("collapsecompact");


buttontask.addEventListener("click", function()
{
    compactcover.classList.toggle("active");
    buttontask.style.background = "rgba(0, 0, 0, 0.679)";
    todoappdiv.classList.toggle("active");
    footer.classList.toggle("active");
    buttonnews.style.display = "none";
    buttonweather.style.transform = "Scale(0)";
    calendar.classList.toggle("active");
});
buttonweather.addEventListener("click", function()
{
    compactcover.classList.toggle("active");
    buttonweather.style.background = "rgba(0, 0, 0, 0.679)";
    weatherappdiv.classList.toggle("active");
    calendar.classList.toggle("active");
    footer.classList.toggle("active");
    buttontask.style.transform = "Scale(0)";

});

collapsecompact.addEventListener("click", function()
{
    compactcover.classList.remove("active");
    todoappdiv.classList.remove("active");
    newsappdiv.classList.remove("active");
    calendar.classList.remove("active");
    footer.classList.remove("active");
    weatherappdiv.classList.remove("active");
    buttontask.style.background = "red";
    buttonweather.style.background = "red";
    buttontask.style.transform = "Scale(1)";
    buttonweather.style.transform = "Scale(1)";

});