const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apikey = "LClA8l0MpIFuifDHlLzDew==3NW6AMBImNcauxMn";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke()
{
    try {
        btnEl.innerHTML = "Loading...";
        jokeEl.innerHTML = "Loading the joke..."
    
        const response = await fetch(apiURL, options);
        const data = await response.json();
    
        jokeEl.innerHTML = data[0].joke;
        btnEl.innerHTML = "Tell me a joke";
    } catch (error) {
        console.log(error);
        jokeEl.innerHTML = "Please check your Connection";
    }
}

btnEl.addEventListener("click", getJoke)