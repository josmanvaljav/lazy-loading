import observeImage from "./lazy.js";

// Generate a random number for the images files (URL)
const randomNum = () => {
    const minNum = 1;
    const maxNum = 122;
    const newRandomNum = Math.floor(Math.random() * (maxNum - minNum)) + minNum;

    return newRandomNum;
}

// Create elements for the images
const createImageGroup = () => {
    const newDiv = document.createElement("div");
    newDiv.className = "p-4";

    const newImage = document.createElement("img");
    newImage.className = "w-60 mx-auto";
    newImage.dataset.src = `https://randomfox.ca/images/${randomNum()}.jpg`;

    newDiv.appendChild(newImage);
    
    return newDiv;
};

// Work with the event of the button to add images
const divImages = document.querySelector("#images");
const addImageButton = document.querySelector("#addImageButton");

const addImage = () => {
    const newImageGroup = createImageGroup();
    divImages.appendChild(newImageGroup);
    observeImage(newImageGroup);
};

addImageButton.addEventListener("click", addImage);
