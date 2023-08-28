console.log("Let's get this party started!");
// awaits for the response from the api, doesnt execute any code inside of the scope of its function, all other codes will run
// async await, we use the await keyword inside a async function
// async function getData() { // awaits for promise to be fufilled
//     const response = await axios.get('https://swapi.dev/api/planets/')
//     const { next, results } = response.data; 
//     for(let planet of results){
//         console.log(planet)
//     }
// }

const giphyCont = document.querySelector('.giphy-container')
const $userInput = $('input[name="search"]');
const form = document.querySelector('form');
// when btn is pressed
// take input
// make axios request 
// see if input is included in the data of the request

// async function createGiphyBySearch(input) {
//     try {
//         const url = `https://api.giphy.com/v1/gifs/search/tags?api_key=u5qTir48J9v2qo5GFNmTWTbqjP7TFVpS&q=${input}&limit=25&offset=0`;
//         const result = await axios.get(url);
//         console.log(result.data[2]);
//         const giphy = document.querySelector('.giphy');
//         giphy.src = result.data;
//     } catch(e) {
//         alert('NOT FOUND')
//     }
// }


async function addGif(result) {
        let numResults = result.data.data.length;
        if(numResults){
            const rdnmIdx = Math.floor(Math.random() * numResults);
            const giphy = document.createElement('img');
            giphy.src = result.data.data[rdnmIdx].images.original.url;
            giphy.classList.add('img-fluid');
            giphy.classList.add('m-5');
            giphyCont.appendChild(giphy);
        }
}

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    let searchTerm = $userInput.val();
    $userInput.val("");

    const url = `https://api.giphy.com/v1/gifs/search?api_key=u5qTir48J9v2qo5GFNmTWTbqjP7TFVpS&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const result = await axios.get(url);
    
    addGif(result);
});

$("#remove").on("click", function() {
    $('.giphy-container').empty();
  });