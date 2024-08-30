document.addEventListener("DOMContentLoaded", function() {
    // access the images
    let slideImages = document.querySelectorAll("img");

    // access buttons
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");

    // access the indicators
    let dots = document.querySelector(".dot");

   var counter = 0;

//    code for next
    next.addEventListener("click", slideNext);
    function slideNext() {
        slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
        if (counter >= slideImages.length-1) {
            counter = 0;
        }
        else{
            counter++;
        }
        slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
        indicators();
    };

//    code for prev
    prev.addEventListener("click", slidePrev);
    function slidePrev() {
        slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
        if (counter == 0) {
            counter = slideImages.length-1;
        }
        else{
            counter--;
        }
        slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
        indicators();
    };

// code for autosliding
    function autosliding() {
        deleteInterval = setInterval(timer, 1500);
        function timer() {
            slideNext();
            indicators();
        }
    }
    autosliding();


    // stop autosliding when mouse is over
    const container = document.querySelector(".slider-container");
    container.addEventListener("mouseover", function name() {
        clearInterval(deleteInterval);
    });

    // continue autosliding when mouse is out
    container.addEventListener("mouseout", autosliding);

    // / ---------------add and remove active class from the indicators-------------
    function indicators() {
        for ( i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("  active", "");
            
        }
        dots[counter].className += " active";
    }
    
    // ---------------add click event to the indicators-------------
    function switchImage(currentImage) {
        currentImage.classList.add("active");
        var imageID = currentImage.getAttribute("attr");
        if (imageID > counter) {
            slideImages[counter].style.animation = "next1 0.5s ease-in forwards";  
            counter = imageID;
            slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
        }
        else if(imageID == counter){
            return;
        }
        else{
            slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";  
            counter = imageID;
            slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
        }
        indicators();
    }
});



// -----------------------------------games----------------


document.addEventListener("DOMContentLoaded", function() {
    let slideContent = document.querySelectorAll("[explode]");

// access buttons
let nex = document.querySelector("[nexting]");
let pre = document.querySelector("[preving]");

var counterGames = 0;

// code for after button
nex.addEventListener("click", slideAfter);
function slideAfter() {
    slideContent[counterGames].style.animation = "nex1 0.5s ease-in forwards";
    if (counterGames >= slideContent.length - 1) {
        counterGames = 0;
    } else {
        counterGames++;
    }
    slideContent[counterGames].style.animation = "nex2 0.5s ease-in forwards";
}

// code for before button
pre.addEventListener("click", slideBefore);
function slideBefore() {
    slideContent[counterGames].style.animation = "pre1 0.5s ease-in forwards";
    if (counterGames == 0) {
        counterGames = slideContent.length - 1;
    } else {
        counterGames--;
    }
    slideContent[counterGames].style.animation = "pre2 0.5s ease-in forwards";
}


function autoSliding() {
    deletInterval = setInterval(timer,2000);
    function timer() {
        slideAfter();
        indicators(); 
    }
}
autoSliding() 


// ---------------stop auto sliding when mouse is over-------------
const container = document.querySelector(".explore-cont")
container.addEventListener("mouseover", function() {
    clearInterval(deletInterval);
});
// ---------------resume sliding when mouse is out-------------
container.addEventListener("mouseout", autoSliding);


})

