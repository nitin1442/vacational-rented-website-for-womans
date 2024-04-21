document.getElementById("citySearch").addEventListener("keydown", function(event) {
    // Check if the pressed key is the "Enter" key (key code 13)
    if (event.keyCode === 13) {
        // Prevent default behavior of the "Enter" key (submitting the form)
        event.preventDefault();
        // Call the searchCity function to perform the search
        searchCity();
    }
});

function searchCity() {
    var cityName = document.getElementById("citySearch").value.trim().toLowerCase();

    // List of available cities and their corresponding URLs
    var cities = {
        "goa": "goa.html",
        "delhi": "delhi.html",
        "mumbai": "mumbai.html",
        "jaipur": "jaipur.html"
    };

    // Check if the searched city is available in the list of cities
    if (cityName in cities) {
        // City found, redirect to the corresponding city page
        window.location.href = cities[cityName];
    } else {
        // City not found, display error message
        alert("Sorry, the city you searched for is not available.");
    }
}
