var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.send();

request.onload = function () {
    var data = JSON.parse(this.response);
    
    // Get all the countries from Asia Continent
    let asia = data.filter((data) => data.region === 'Asia');
    for(let i in asia) {
        console.log(asia[i].name);
    }
    
    // Get all the countries with population of less than 2 lacs using Filter function
    let population2lakhs = data.filter((data) => data.population < 200000);
    for(let i in population2lakhs) {
        console.log(population2lakhs[i].name);
    }

    // Print the following details name, capital, flag using forEach function
    let capitalDetails = data.forEach((item) => {
        console.log(item.name, item.capital, item.flag);
    });

    // Print the total population of countries using reduce function
    let totalPopulation = data.reduce((acc, item) => {
        return acc+item.population;
    }, 0);
    console.log(totalPopulation);

    // Print the country which use US Dollars as currency.
    let usd = data.filter((item) => {
        return item.currencies[0].code === 'USD';
    })
    for(let j in usd) {
        console.log(usd[j].name);
    }
}

request.onerror = function() {
    console.log('Error Occured');
}
