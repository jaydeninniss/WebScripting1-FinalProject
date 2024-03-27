
// VANCOUVER ==== https://api.openweathermap.org/data/2.5/weather?lat=49.28190749158899&lon=-123.10989051451176&appid=12308284112402dcd0444c20a407d318&units=metric

//  LAS VEGAS ==== https://api.openweathermap.org/data/2.5/weather?lat=36.17361456664323&lon=-115.19963520827807&appid=12308284112402dcd0444c20a407d318&units=metric

//Dzhezkazgan === https://api.openweathermap.org/data/2.5/weather?lat=47.80449069672075&lon=67.68321107803644&appid=12308284112402dcd0444c20a407d318&units=metric


let city;

async function logweather(city) {

    const response = await fetch('"https://api.openweathermap.org/data/2.5/weather?' + city);
    console.log(city)

   //const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=49.28190749158899&lon=-123.10989051451176&appid=12308284112402dcd0444c20a407d318&units=metric");
   //const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=36.17361456664323&lon=-115.19963520827807&appid=12308284112402dcd0444c20a407d318&units=metric");
   //const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=47.80449069672075&lon=67.68321107803644&appid=12308284112402dcd0444c20a407d318&units=metric");
    //const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=12308284112402dcd0444c20a407d318&units=metric");
    
    const weather = await response.json();

    let temp = weather.main.temp;
    temp = temp.toFixed(0)
    document.querySelector("#main").innerHTML = weather.weather[0].main;
    document.querySelector("#temp").innerHTML = temp + "&deg;";

    
    weathericon = document.querySelector(".weathericonimg");
    iconname = weather.weather[0].icon;
    weathericon.src = "https://openweathermap.org/img/wn/" + iconname + "@4x.png"




    //Daytime checker 

//     let rn = weather.dt;
//     let sunrise = weather.sys.sunrise;
//     let sunset = weather.sys.sunset;
//     let night;


//     if (rn > sunrise && rn < sunset ) {
//         night = false
//     } else {
//         night = true
//     }


//     //switch statement for the icons

//     weathericon = document.querySelector(".weathericonimg");

//     switch (weather.weather[0].main) {
//         case "Clear":
//             if (night==false){
//                 weathericon.src = "images/weathericons/sunny.png";
//                 console.log("sunny");
//             } else {
//                 weathericon.src = "images/weathericons/clear.png";
//                 console.log("clear");
//             }
//     }

    };

  window.addEventListener('load', logweather);

    vanbtn = document.querySelector("#van");
    whisbtn = document.querySelector("#whis");
    kelownabtn = document.querySelector("#kelowna");
    kyivbtn = document.querySelector("#kyiv");

    vanbtn.addEventListener("click", logweather('lat=49.28190749158899&lon=-123.10989051451176&appid=12308284112402dcd0444c20a407d318&units=metric"'));
    whisbtn.addEventListener("click", logweather("lat=50.12457031254098&lon=-122.95838029921302&appid=12308284112402dcd0444c20a407d318&units=metric"));
    kelownabtn.addEventListener("click", logweather("?lat=49.88533607419358&lon=-119.49251265360846&appid=12308284112402dcd0444c20a407d318&units=metric"));
    whisbtn.addEventListener("click", logweather("?lat=50.44111774161272&lon=30.54295082049556&appid=12308284112402dcd0444c20a407d318&units=metric"));





    // const fetchweather = () => {
// 	// Fetch the list of all 151 Pokemon
// 	fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=12308284112402dcd0444c20a407d318')
// 		// Convert the response to JSON
// 		.then(response => response.json())

// 		// 
// 		.then(data => {

// 			// Get the results from the JSON data
// 			let results = data.results;
//             console.log(results);
// 			// Create an array of promises
// 			//  - Each promise will fetch the data for a single pokemon
// 			//  - The Promise.all method will wait for all the promises to resolve
// 			// .map() is used to create an array of promises
// 			//      - The .map() method will iterate over the results array
// 			let promisesArray = results.map(result => {
// 				// Fetch the data for a single pokemon
//                 console.log("dta");
// 				return fetch(result.url).then(response => response.json());

// 			});
 
// 			// Wait for all the promises to resolve, then continue.
// 			return Promise.all(promisesArray);
// 		})
// 		// Pass the array of pokemon data to the displayPokemon function from the .then() method above
// 		.then(weatherData => {
// 			// Iterate over the array of pokemon data and display each pokemon using the displayPokemon function
// 			weatherData.forEach(console.log(promisesArray));
// 		})
// 		// Log any errors to the console
// 		.catch(error => console.log(error));
//         console.log("yooo")
// }
 
// // When the window loads, show all the first 151 Pokemon using the code above.
// window.addEventListener('load', fetchweather);