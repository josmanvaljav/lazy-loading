const ifIsIntersecting = (entry) => {
    return entry.isIntersecting;
};

const loadImage = (entry) => {
    const divImage = entry.target;
    const imgNode = divImage.firstChild;
    const imageUrl = imgNode.dataset.src;
    imgNode.src = imageUrl;

    observer.unobserve(divImage);
};

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(ifIsIntersecting)
        .forEach(loadImage);
});

const observeImage = (image) => {
    observer.observe(image);
};

export default observeImage;