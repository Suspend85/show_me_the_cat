const API_KEY = "3be18482-503e-4a25-bb02-5eaacc70b5e4";
const API_URL = "https://api.thecatapi.com/v1/images/search";
const btn = document.querySelector("#root button");
const catImage = document.getElementById("cat");

// get another image func
const getCatImage = async () => {
  btn.classList.remove("active");
  catImage.classList.add("hidden");
  btn.classList.add("active");
  const response = await fetch(API_URL, { headers: { "x-api-key": API_KEY } });
  const data = await response.json();
  catImage.src = data[0].url;
};

// Button click event
button.addEventListener("click", getCatImage);
catImage.addEventListener("load", () => {
  btn.classList.add("active");
  catImage.classList.remove("hidden");
  btn.classList.remove("active");
});

getCatImage();

