const images =["assets/img2.avif", "assets/img11.jpg", "assets/img6.jpg"];
let index = 0;
setInterval(() => {
    document.getElementById("slider").src = images[index];
    index++;

    //Reset counter when reaching end
    if (index === images.length){
        index = 0;
    }
}, 2000);