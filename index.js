//Objetivo: Leer el api y mostrar la imagen del personaje
// fetch('https://rickandmortyapi.com/api/character/8')
//     .then(function(response){return response.json();})
//     .then(function(data){console.log(data) });

fetch('https://goweather.herokuapp.com/weather/Houston')
    .then(response => response.json())
    .then(function(data) {
        console.log('La temperatura es:',data.temperature)
        console.log('la velocidad del viento es:',data.wind)
    })