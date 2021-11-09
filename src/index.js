document.body.onload = () => {
  setTimeout( () => {
    const preloader = document.getElementById('page-preloader')
    if ( !preloader.classList.contains('done') )
    {
      preloader.classList.add('done');
    }
  }, 1000);
}

const API_KEY = "3be18482-503e-4a25-bb02-5eaacc70b5e4";
const API_URL = "https://api.thecatapi.com/v1/images/search";
const button = document.querySelector("#button");
const catImage = document.querySelector("#cat");

button.addEventListener("click",
  async () => {
    // event.preventDefault();
    const response = await fetch(API_URL, { headers: { "x-api-key": API_KEY } });
    const data = await response.json();
    catImage.src = data[0].url;
  }
)

