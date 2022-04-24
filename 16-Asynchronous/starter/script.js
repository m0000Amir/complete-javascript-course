'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// console.log('Hi');

///////////////////////////////////////
const renderError = function(msg) {
    countriesContainer.insertAdjacentText("beforeend", msg);
    countriesContainer.style.opacity = "1";
}

const renderCountry = function(data, className = " ") {
    const html = `
            <article class="country ${className}">
          <img class="country__img" src="${data.flags[Object.keys(data.flags)[0]]}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000_000).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[Object.keys(data.languages)[0]]}</p>
            <p class="country__row"><span>💰</span>${data.currencies[Object.keys(data.currencies)[0]].name}</p>
          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = "1";
    btn.style.opacity = "0";
}

const getCountrysAndNeihbour = function(country) {
    // AJAX call Country
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener("load", function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        // Render country
        renderCountry(data);

        // Get neighbours country
        const neighbour = data.borders;
        console.log("length", neighbour.length);
        // console.log("neighbour", neighbour);

        if (!neighbour) return;
        for (let i=0; i < neighbour.length; i++) {
            const request = new XMLHttpRequest();
            request.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour[i]}`);
            console.log("neighbour", neighbour);
            request.send();

            request.addEventListener("load", function () {
                const [data2] = JSON.parse(this.responseText);
                console.log("data2", data2);
                renderCountry(data2, "neighbour");
            });
        }
    });
}

const getJSON1 = async function(url, errorMsg = "Country not found") {
    const response = await fetch(url);
    console.log(response);
    if (!response.ok)
        throw new Error(`${errorMsg} (${response.status})`);
    return await response.json();
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};



// const getCountryData = function(country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then( response => {
//             console.log(response);
//             if (!response.ok)
//                 throw new Error(`Country not found (${response.status})`)
//             return response.json()
//             }
//         )
//         .then(data => {
//             renderCountry(data[0])
//             console.log("data", data);
//             const neighbour = data[0].borders;
//             console.log("neighbour", neighbour);
//             if (!neighbour) return;
//
//             return fetch(`https://restcountries.com/v3.1/alpha/${neighbour[0]}`);
//         })
//         .then(response => {response.json()})
//         .then(data => renderCountry(data[0], "neighbour"))
//         .catch(err => {
//             console.error(`${err}`);
//             renderError(`Something wrong ${err.message}. Try again!`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = "1";
//         });
// };

// const getCountryData = function(country) {
//     getJSON(
//         `https://restcountries.com/v3.1/name/${country}`,
//         'Country not found')
//         .then(data => {
//             renderCountry(data[0]);
//             console.log('data', data);
//             const neighbour = data[0].borders;
//
//             console.log('Neighbour', neighbour);
//             if (!neighbour) throw new Error("No neighbour found");
//
//
//             return getJSON(
//                 `https://restcountries.com/v3.1/alpha/${neighbour[0]}`,
//                 "Country not found"
//             );
//         })
//         .then(data => renderCountry(data[0], "neighbour"))
//         .catch(err => {
//             console.error(`${err}`);
//             renderError(`Something wrong ${err.message}. Try again!`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = "1";
//         });
// }
//
//
// btn.addEventListener('click', function() {
//     getCountryData("Kazakhstan");
// });



// getCountrysAndNeihbour("Russia");
// getCountrysAndNeihbour("United Kingdom");
// getCountrysAndNeihbour("RSA");
// const data1 = getCountryData("Norway");
// const data2 = getCountryData("Sweden");
// const data3 = getCountryData("Denmark");

// const getCountryData = function(country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(response=> response.json())
//         .then(data => {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0];
//             console.log(neighbour);
//             return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//         })
//         .then(response => response.json())
//         .then(data => renderCountry(data[0], "neighbour"))
//         .catch(err => alert(err));
// };
//
// getCountryData("Brazil");


// console.log("Test start")
// setTimeout(() => console.log("0 sec timer"), 0);
// Promise.resolve("Resolved promise 1")
//     .then(res=>console.log(res));
//
// Promise.resolve("Resolved promise 2")
//     .then(res => {
//         for (let i = 0; i < 1000000000; i++) {
//
//         }
//         console.log(res);
//     })
// console.log("Test end");

// const LotteryPromise = new Promise(function (resolve, reject) {
//     console.log("Waiting!")
//     setTimeout(function() {
//         if (Math.random() >= 0.5) {
//             resolve("You win!")
//         } else {
//             reject(new Error("You lost!"))
//         }
//     }, 2000);
//
// })
//
// LotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
//
// const wait = function(seconds) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, seconds * 1000);
//     });
// }
//
// wait(2).then(() => {
//     console.log("I waited for 2 seconds");
//     return wait(1);
//     })
//     .then(() => {
//         console.log("I waited for 1 seconds")
// });
//
//
// Promise.resolve("abc").then(x => console.log(x));
// Promise.reject(new Error("abc")).then(x => console.log(x));

// navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.error(err)
// )


// const getPosition = function() {
//     return new Promise(function (resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     })
// }


// getPosition().then(pos => console.log(pos));


// const whereAmI = function (lat, lng) {
//     getPosition()
//         .then(pos => {
//             const {latitude: lat, longitude: lng} = pos.coords;
//             return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//         })
//         .then(res => {
//             return res.json();
//         })
//         .then(data => {
//             console.log(data);
//             console.log(`You are in ${data.city}, ${data.country}`);
//             return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
//         })
//         .then(res => res.json())
//         .then(data => renderCountry(data[0]))
//         .catch(err => console.error(err.message));
// }

// btn.addEventListener('click', whereAmI);


const getPosition = function() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}

const whereAmI = async function() {
    try {
    // Geolacation
        const pos = await getPosition();
        const {latitude: lat, longitude: lng} = pos.coords;
        // Revers geocoding;
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

        const dataGeo = await resGeo.json();
        
        const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`)

        const data = await res.json();
        console.log(`Data ${data[0]}`);
        // renderCountry(data[0]);
        return data[0]
    } catch(err) {console.error(err)};
}

// Promise.all([whereAmI(), whereAmI(), whereAmI()])
//     .then((countries) => {
//         for (let i = 0; i<=countries.length;i++) {
//             console.log("Country", countries[i]);
//             renderCountry(countries[i]);
//         }
//     })
//     .catch(error => console.error(error));


// console.log("first");
// whereAmI()
//     .then((country) => {
//         renderCountry(country)
//         console.log(country)
//     });

// // 
// console.log("second");


// const a = async function () {
//     try {
//         const country = await whereAmI();
//         renderCountry(country);
//         console.log(`Country ${country}`);
//     } catch (err) {
//         console.error(err)
//     }
//     console.log("Finish");
// };
//
// a();


// (async function () {
//     const res = await Promise.race([
//         getJSON(`https://restcountries.com/v3.1/name/usa`),
//         getJSON(`https://restcountries.com/v3.1/name/japan`),
//         getJSON(`https://restcountries.com/v3.1/name/france`)
//     ]);
// console.log(res[0])
// }) ();


// Promise.race
// const as = async function () {
//     console.log('1');
//     const res = await Promise.race([
//         getJSON(`https://restcountries.com/v3.1/name/usa`),
//         getJSON(`https://restcountries.com/v3.1/name/japan`),
//         getJSON(`https://restcountries.com/v3.1/name/france`)
//     ]);
//     console.log(res[0]);
// };
//
// as();


///////////////////////////////////////
// Coding Challenge #3

/*
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/
const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function () {
            reject(new Error('Image not found'));
        });
    });
};

// Promisifying setTimeout
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

let currentImg;

// createImage("img/img-1.jpg")
//     .then(img => {
//         currentImg = img;
//         console.log("Image 1 load");
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = "none";
//         return createImage("img/img-2.jpg");
//     })
//     .then(img => {
//         currentImg = img;
//         console.log("Image 2 load");
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = "none";
//     })
//     .catch(err => console.error(err));


// const LoadNPause = async function() {
//     try {
//         let img = await createImage('img/img-1.jpg')
//         console.log("Image 1 load");
//         await wait(2);
//         img.style.display = "none";
//
//         img = await createImage('img/img-2.jpg')
//         console.log("Image 2 load");
//         await wait(2);
//         img.style.display = "none";
//
//     } catch (err) {
//         console.error(err);
//     }
// }
//
// LoadNPause();

const loadAll =async function(imgArr) {
    try {
        const imgs = imgArr.map(async img => await createImage(img))
        const imgEl = await Promise.all(imgs);
        console.log(imgEl);
        imgEl.forEach(img => img.classList.add('parallel'));
    } catch(err) {console.log(err)}
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])