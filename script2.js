
let searchsection = document.querySelector(".search");
let searchbar = document.querySelector(".search-bar");
let searchbtn = document.querySelector(".searchbtn");
let weatherdiv = document.querySelector(".weatherdiv");
let content = document.querySelector(".weathercontent");
let iconW = document.querySelector(".weatherIcon");
let btnW = document.querySelector(".weatherbutton");
let contento = document.querySelector(".forecastcontent");
let element1 = document.querySelector(".element1");
let element2 = document.querySelector(".element2");
let thumbW = document.querySelector(".weatherdiv");
let forecastdiv = document.querySelector(".forecastdiv");
let iconF = document.querySelector(".forecastIcon");
let openF = document.querySelector(".forecastbutton");
let btnexit = document.querySelector(".btnexit");
let btnhome = document.querySelector(".hometitle");
let wtop = document.querySelector(".wcitytop");

let weather = {
    apiKey: "e3d7ddf7dbd64ceba10183600222712",
    fetchWeather: function(city) {
        fetch(
            "https://api.weatherapi.com/v1/current.json?key="
            + this.apiKey +"&q=" 
            + city +
             "&aqi=no" 
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
     displayWeather: function(data) {
        const {name} = data.location;
        const { country} = data.location;
        const { text } = data.current.condition;
        const { icon } = data.current.condition;
        const { humidity } = data.current;
        const { temp_c } = data.current;
        const { wind_kph, wind_dir } = data.current;

        document.querySelector(".wcity").innerText = "Today";
        document.querySelector(".wcitytop").innerText = "Weather in " + name + ", "  +country;
        document.querySelector(".wicon").src = icon; 
        document.querySelector(".wdescription").innerText = text;
        document.querySelector(".wtemp").innerText = temp_c +"°C";
        document.querySelector(".whumidity").innerText = "Humidity: " + humidity +"%";
        document.querySelector(".wwind").innerText = "Wind speed: " + wind_kph +" km/h " + wind_dir ;
    },
     search: function (){
        this.fetchWeather(document.querySelector(".search-bar").value);
     }};
     let forecast = {
        apiKey: "e3d7ddf7dbd64ceba10183600222712",
        fetchForecast: function(city) {
            fetch(
                "https://api.weatherapi.com/v1/forecast.json?key="
                +this.apiKey+
                "&q="
                +city+
                "&days=5&aqi=no&alerts=no" 
            ).then((response) => response.json())
            .then((data) => this.displayForecast(data));
        },
         displayForecast: function(data) {
            let date1 = data.forecast.forecastday[1].date;
            let split1 = date1.split(' ')[0];
            let presentday1 = Theeday(new Date(split1).getDay());
    
            let date2 = data.forecast.forecastday[2].date;
            let split2 = date2.split(' ')[0];
            let presentday2 = Theeday(new Date(split2).getDay());
    
            const { name } = data.location;
            const { icon } =  data.forecast.forecastday[1].day.condition;
            const { text } = data.forecast.forecastday[1].day.condition;
            const { maxtemp_c } = data.forecast.forecastday[1].day;
            const { mintemp_c } = data.forecast.forecastday[1].day;
            const { daily_chance_of_rain } = data.forecast.forecastday[1].day;
            let max2 = data.forecast.forecastday[2].day.maxtemp_c;
            let icon2 =  data.forecast.forecastday[2].day.condition.icon;
            let text2 = data.forecast.forecastday[2].day.condition.text;
            let min2 = data.forecast.forecastday[2].day.mintemp_c;
            let rain = data.forecast.forecastday[2].day.daily_chance_of_rain;
    
            document.querySelector(".icon").src = icon;
            document.querySelector(".description").innerText = text;
            document.querySelector(".localday").innerText = presentday1;
            document.querySelector(".rainchance").innerText = "Chance of rain: " +daily_chance_of_rain+ "%";
            document.querySelector(".mintemp").innerText = "Low: " +mintemp_c+ "°C";
            document.querySelector(".maxtemp").innerText = "High: " +maxtemp_c+"°C";
           
            document.querySelector(".icon1").src = icon2;
            document.querySelector(".description1").innerText = text2;
            document.querySelector(".localday1").innerText = presentday2;
            document.querySelector(".rainchance1").innerText = "Chance of rain: " +rain+ "%";
            document.querySelector(".mintemp1").innerText = "Low: "  +min2+ "°C";
            document.querySelector(".maxtemp1").innerText = "High: " +max2+ "°C";
    
    
        },
         search1: function (){
            this.fetchForecast(document.querySelector(".search-bar").value);
         }
         };
          
     function Theeday(number){
        switch (number){
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
        }
     }
     
searchbtn.addEventListener("click", function(){
    if(searchbar.value == "")
    {
        prompt("Please Enter A City Name")
    }
    else
    {
        searchbtn.classList.toggle("active");
        searchsection.classList.toggle("active");
        searchbar.classList.toggle("active");
        weatherdiv.classList.toggle("active");
        forecastdiv.classList.toggle("active");
        content.style.display = "none";
        searchbar.style.display = "none";
        weather.search();
        forecast.search1();
        wtop.style.display = "block";
        btnhome.style.display = "block";
        
    }


});
btnW.addEventListener("click", function()
{   content.classList.toggle("active");
    weatherdiv.classList.toggle("result");
    content.style.display = "block";
    forecastdiv.style.display = "none";
    searchsection.classList.toggle("top");
    searchbar.style.display = "none";
    iconW.style.display = "none";
    btnW.style.display = "none";
    btnexit.classList.toggle("active");
    btnhome.style.display = "none";
});
openF.addEventListener("click", function()
{
    contento.classList.toggle("active");
    forecastdiv.classList.toggle("result");
    weatherdiv.style.display = "none";
    searchsection.classList.toggle("top");
    searchbar.style.display = "none";
    iconF.style.display = "none";
    openF.style.display = "none";
    btnexit.classList.toggle("active");
    element1.classList.toggle("active");
    element2.classList.toggle("active");
    btnhome.style.display = "none";
});
btnexit.addEventListener("click", function()
{
    if(content.classList.contains("active"))
    {
        content.classList.remove("active");
        content.style.display = "none";
        content.classList.add("weathercontent");
        weatherdiv.classList.remove("result");
        weatherdiv.classList.add("weatherdiv");
        searchsection.classList.remove("top");
        searchsection.classList.add("active");
        forecastdiv.style.display = "block";
        iconW.style.display = "block";
        btnW.style.display = "block";
        btnhome.style.display = "block";
        btnexit.classList.remove("active");
     

    }
    else if( contento.classList.contains("active"))
    {
        contento.classList.remove("active");
        contento.classList.add("forecastcontent");
        forecastdiv.classList.remove("result");
        forecastdiv.classList.add("forecastdiv");
        weatherdiv.style.display = "block";
        searchsection.classList.remove("top");
        searchsection.classList.add("active");
        iconF.style.display = "block";
        openF.style.display = "block";
        element1.classList.remove("active");
        element2.classList.remove("active");
        element1.classList.add("element1");
        element2.classList.add("element2");
        btnexit.classList.remove("active");
        btnexit.classList.add("btnexit");
        btnhome.style.display = "block";
    }
    else
    {

    }

});
btnhome.addEventListener("click", function()
{
    searchbtn.classList.remove("active");
    searchsection.classList.remove("active");
    searchbar.classList.remove("active");
    weatherdiv.classList.remove("active");
    forecastdiv.classList.remove("active");
    searchbar.style.display = "block";
    btnhome.style.display = "none";
    wtop.style.display = "none";
    searchbar.value = "";
});