var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.send();

request.onload = function () {
    var data = JSON.parse(this.response);
    var total_population = 0;
    for( let i in data) {
       total_population += parseInt(data[i].poputation);
    }
    console.log(total_population);
}

request.onerror = function() {
    console.log('Error Occured');
}
