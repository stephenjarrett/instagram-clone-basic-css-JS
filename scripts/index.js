var i = 0;
var images = [
'images/alabama.png',
'images/arkansas.jpg',
'images/auburn.jpg',
'images/florida.jpg',
'images/georgia.jpg',
'images/kentucky.jpg',
'images/lsu.webp',
'images/mississippistate.png',
'images/missouri.jpg',
'images/olemiss.jpg',
'images/southcarolina.jpg',
'images/tamu.png',
'images/tennessee.jpeg',
'images/vanderbilt.png'
];

//add thumbnail images to HTML doc
var thumbnailContainer = document.querySelector('[data-thumbnail-div]');
images.forEach(function (image) {
    var imageElement = document.createElement('img');
    imageElement.setAttribute('src', image);
    imageElement.classList.add('thumbnail');
    imageElement.setAttribute('data-imagethumbnail','');
    thumbnailContainer.appendChild(imageElement);
})

var navSelection = "[data-imagethumbnail]";
var imgSelection = "[data-mainimage]";

var navItems = document.querySelectorAll(navSelection);
var imgTarget = document.querySelector(imgSelection);

//change main image to thumbnail image when clicked on and add hover effect on mouseover
navItems.forEach(function (nav) {
    nav.addEventListener('click', function (event) {
        // console.log(nav.getAttribute('src'));
        // event.preventDefault();
        imgTarget.setAttribute('src', nav.getAttribute('src'));
        i = images.indexOf(imgTarget.getAttribute('src'));
    })

    nav.addEventListener('mouseover', function (event) {
        nav.classList.add('image-hover-highlight');
    })

    nav.addEventListener('mouseout', function (event) {
        nav.classList.remove('image-hover-highlight');
    })
});


//helper functions for arrow buttons on screen
function imageForward() {
    if (i >= images.length-1) {
        i = 0;
    } else {
        i += 1;}
    var imgSrc = images[i];
    return imgSrc;
}

function imageBackward() {
    if (i == 0) {
        i = images.length-1; 
    } else {
        i -= 1;
    }
    var imgSrc = images[i];
    return imgSrc;
}

var arrowBack = document.querySelector('[data-arrow-back]');
var arrowForward = document.querySelector('[data-arrow-forward]');

//change main image using the arrow buttons on screen
arrowForward.addEventListener('click', function (event) {
    imgTarget.setAttribute('src', imageForward());
})

arrowBack.addEventListener('click', function (event) {
    imgTarget.setAttribute('src', imageBackward());
})

//change main images with the keyboard left and right arrow
document.addEventListener('keydown', function (event) {
    const key = event.key;
    switch (event.key) {
        case "ArrowLeft":
        imgTarget.setAttribute('src', imageBackward());
        break;
        case "ArrowRight":
        imgTarget.setAttribute('src', imageForward());
        break;
    }
})












//html image data just in case needed later
/* < img data - imagethumbnail src = "images/alabama.png" alt = "" class="thumbnail" >
    <img data-imagethumbnail src="images/arkansas.jpg" alt="" class="thumbnail">
        <img data-imagethumbnail src="images/auburn.jpg" alt="" class="thumbnail">
            <img data-imagethumbnail src="images/florida.jpg" alt="" class="thumbnail">
                <img data-imagethumbnail src="images/georgia.jpg" alt="" class="thumbnail">
                    <img data-imagethumbnail src="images/kentucky.jpg" alt="" class="thumbnail">
                        <img data-imagethumbnail src="images/lsu.webp" alt="" class="thumbnail">
                            <img data-imagethumbnail src="images/mississippistate.png" alt="" class="thumbnail">
                                <img data-imagethumbnail src="images/missouri.jpg" alt="" class="thumbnail">
                                    <img data-imagethumbnail src="images/olemiss.jpg" alt="" class="thumbnail">
                                        <img data-imagethumbnail src="images/southcarolina.jpg" alt="" class="thumbnail">
                                            <img data-imagethumbnail src="images/tamu.png" alt="" class="thumbnail">
                                                <img data-imagethumbnail src="images/tennessee.jpeg" alt="" class="thumbnail">
                                                    <img data-imagethumbnail src="images/vanderbilt.png" alt="" class="thumbnail">             */