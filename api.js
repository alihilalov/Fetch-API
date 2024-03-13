const callAPI = async () => {
    try {
        const response = await fetch('https://famous-quotes4.p.rapidapi.com/random?category=all&count=2', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'your-rapidapi-key',
                'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
            },
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data from API:', error);
    }
}

const callAPICat = async () => {
    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", {
            method: 'GET',
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data from API:', error);
    }
}

const texasAPI = async () => {
    try {
        const options = {
            method: 'POST',
            url: 'https://textapis.p.rapidapi.com/text',
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': '74cc79460fmsh3c6d0abcb93703cp140eb4jsn8975796733b1',
                'X-RapidAPI-Host': 'textapis.p.rapidapi.com',
            },
            body: '{"url":"https://www.theguardian.com/world/2020/oct/24/thousands-join-poland-protests-against-strict-abortion-laws"}',
        };
        const response = await fetch('https://textapis.p.rapidapi.com/text', options);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data from API:', error);
    }
}

const callAPIJson = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
            method: 'put',
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data from API:', error);
    }
}


const callAPIOpenWeather = async () => {
    try {
        const response = await fetch("https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}", {
            method: "GET",
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data from API:', error);
    }
}

const callAPIRandomUSer = async () => {
    try {
        const response = await fetch("https://randomuser.me/api/", {
            method: "GET",
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data from API:', error);
    }
}

const callAPIRestCountry = async () => {
    try {
        const response = await fetch("https://restcountries.com/v3.1/name/{name}?fullText=true", {
            method: "GET",
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data from API:', error);
    }
}

const callAPIPokemon = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
            method: "GET",
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data from API:', error);
    }
}





callAPI()
callAPICat()
callAPIJson()
callAPIOpenWeather()
callAPIRandomUSer()
callAPIRestCountry()
callAPIPokemon()
texasAPI()