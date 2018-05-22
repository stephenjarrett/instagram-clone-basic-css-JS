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

//add thumbnail images to HTML doc
var $thumbnailContainer = $('[data-thumbnail-div]');
images.forEach(function (image) {
    var $imageElement = $('<img>');
    $imageElement.attr('src', image.img);
    $imageElement.addClass('thumbnail');
    $imageElement.attr('data-imagethumbnail','');
    $thumbnailContainer.append($imageElement);
})

var navSelection = "[data-imagethumbnail]";
var imgSelection = "[data-mainimage]";

var $navItems = $(navSelection);
var $imgTarget = $(imgSelection);

//change main image to thumbnail image when clicked on and add hover effect on mouseover
$navItems.each(function (none,nav) {
    $(this).on('click', function (event) {
        $imgTarget.attr('src', $(this).attr('src'));
        i = none;
    })
    $(this).on('mouseover', function (event) {
        $(this).addClass('image-hover-highlight');
    })
    $(this).on('mouseout', function (event) {
        $(this).removeClass('image-hover-highlight');
    })
});

// activate model/overlay
var $modal = $('[data-modal]');
var $modalImage = $('[data-modal-image]');
var $modalText = $('[data-meta1]');

$imgTarget.on('click', function (event) {
    $modal.toggleClass('hidden');
    $modalImage.attr('src', $imgTarget.attr('src'));
    $modalText.text(images[i].text);
})

// exit overlay by clicking exit button
var $modelExitButton = $('[data-modal-exit]');
$modelExitButton.on('click', function (event) {
    $modal.toggleClass('hidden');
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

var $arrowBack = $('[data-arrow-back]');
var $arrowForward = $('[data-arrow-forward]');

//change main image using the arrow buttons on screen
$arrowForward.on('click', function (event) {
    $imgTarget.attr('src', imageForward());
})

$arrowBack.on('click', function (event) {
    $imgTarget.attr('src', imageBackward());
})

//change main images with the keyboard left and right arrow
$(document).on('keydown', function (event) {
    switch (event.key) {
        case "ArrowLeft":
        $imgTarget.attr('src', imageBackward());
        break;
        case "ArrowRight":
        $imgTarget.attr('src', imageForward());
        break;
        case "Escape":
        $modal.toggleClass('hidden');
    }
})

function konamiCode() {
    var input = '';
    var konamiCode = '38384040373937396665';
    $(document).on('keydown', function (e) {
        input += e.keyCode;
        if (input == konamiCode) {
            return konamiEffect();
        }
        if (!input.indexOf(input)) return;
        input = ('' + $(e).keyCode);
        }
    )}

function konamiEffect () {
    $('.main-container').css('background-color','black');
}

konamiCode();