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
    newDiv.className = "lazyImageDiv p-4 my-4 mx-auto w-2/5 bg-gray-50 shadow-sm shadow-gray-300";

    const newImage = document.createElement("img");
    newImage.className = "mx-auto";
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

// Work with the event to clean images
const cleanButton = document.querySelector("#cleanImages");

const cleanImages = () => {
    let divImagesAdded = document.querySelector(".lazyImageDiv");

    while (divImagesAdded) {
        divImagesAdded.remove();
        divImagesAdded = document.querySelector(".lazyImageDiv");
    }
};

cleanButton.addEventListener("click", cleanImages);
