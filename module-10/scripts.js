document.getElementById("toggle-image").onclick = function () {
    // get current image element
    const image = document.getElementById("toggle-image");

    // toggle the image source
    if (image.src.includes("cg_1.jpg")) {
        image.src = "images/cg_2.jpg";
    } else {
        image.src = "images/cg_1.jpg";
    }
};

document.getElementById("cycle-image").onclick = function () {
    // image sources list 
    const images = [
        "images/helloKitty.jpg",
        "images/helloKitty_green.jpg",
        "images/helloKitty_indigo.jpg",
    ];
    
    // get current image element
    const image = document.getElementById("cycle-image");

    // extract the current image file name (without the full URL)
    const currentFileName = image.src.substring(image.src.lastIndexOf("/") + 1);

    // find the current image index in the images array
    const currentIndex = images.findIndex((path) => path.endsWith(currentFileName));

    // calculate the next index
    const nextIndex = (currentIndex + 1) % images.length;

    // set the new image source
    image.src = images[nextIndex];
};

