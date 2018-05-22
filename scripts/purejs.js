var i = 0;
var images = [
{img:'images/alabama.png', text: 'Alabama'},
{img:'images/arkansas.jpg', text: 'Arkansas'},
{img:'images/auburn.jpg', text: 'Auburn'},
{img:'images/florida.jpg', text: 'Florida'},
{img:'images/georgia.jpg', text: 'Georgia'},
{img:'images/kentucky.jpg', text: 'Kentucky'},
{img:'images/lsu.webp', text: 'LSU'},
{img:'images/mississippistate.png', text: 'Mississippi State' },
{img:'images/missouri.jpg', text: 'Missouri' },
{img:'images/olemiss.jpg', text: 'Ole Miss'},
{img:'images/southcarolina.jpg', text: 'South Carolina'},
{img:'images/tamu.png', text: 'Texas A&M'},
{img:'images/tennessee.jpeg', text: 'Tennessee'},
{img:'images/vanderbilt.png', text: 'Vanderbilt'}
];

var imageURL = images.map(function (image) {
    return image.img;
});

//add thumbnail images to HTML doc
var thumbnailContainer = document.querySelector('[data-thumbnail-div]');
images.forEach(function (image) {
    var imageElement = document.createElement('img');
    imageElement.setAttribute('src', image.img);
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
        imgTarget.setAttribute('src', nav.getAttribute('src'));
        i = imageURL.indexOf(imgTarget.getAttribute('src'));
    })
    nav.addEventListener('mouseover', function (event) {
        nav.classList.add('image-hover-highlight');
    })
    nav.addEventListener('mouseout', function (event) {
        nav.classList.remove('image-hover-highlight');
    })
});

// activate model/overlay
var modal = document.querySelector('[data-modal]');
var modalImage = document.querySelector('[data-modal-image]');
var modalText = document.querySelector('[data-meta1]');

imgTarget.addEventListener('click', function (event) {
    modal.classList.toggle('hidden');
    modalImage.setAttribute('src', imgTarget.getAttribute('src'));
    modalText.textContent = images[i].text;
})

// exit overlay by clicking exit button
var modelExitButton = document.querySelector('[data-modal-exit]');
modelExitButton.addEventListener('click', function (event) {
    modal.classList.toggle('hidden');
})

//helper functions for arrow buttons on screen
function imageForward() {
    if (i >= images.length-1) {
        i = 0;
    } else {
        i = i + 1;}
    var imgSrc = images[i].img;
    return imgSrc;
}

function imageBackward() {
    if (i == 0) {
        i = images.length-1; 
    } else {
        i = i - 1;
    }
    var imgSrc = images[i].img;
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
    switch (event.key) {
        case "ArrowLeft":
        imgTarget.setAttribute('src', imageBackward());
        break;
        case "ArrowRight":
        imgTarget.setAttribute('src', imageForward());
        break;
        case "Escape":
        modal.classList.toggle('hidden');
    }
})