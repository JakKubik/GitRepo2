import fetch from 'node-fetch';

async function main() {
    let res = await fetch('https://goweather.herokuapp.com/weather/Wroclaw');
    res = await res.json();
    let temperatures = [];
    for (let number = 0; number < 3;) {
    const element = res.forecast[number].temperature;
    temperatures.push(element);
    number++;
}
CzyCieplo(temperatures);
}

function CzyCieplo(temps) {
    let cieplo = new Boolean(false);
    
    for (let number = 0; number < 3; number++) {
        temps[number] = temps[number].replace(/[^\d.-]/g, " ");
        if (temps[number] >= 15) {cieplo = true;}
        
    }
    if (!cieplo) {console.log("Najbliższe dni zapowiadają się dość chłodno. " +
    "Ich temperatura nie przekroczy 15 stopni Celcjusza.");
        
    } else {console.log("Jeden z najbliższych dni zapowiada się ciepło, przewiduje się w nim powyżej 15 stopni celcjusza")}
}
main();