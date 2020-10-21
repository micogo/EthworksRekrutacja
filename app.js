let modal = document.getElementById("myModal");

// Get the button that opens the modal
let iframe = document.querySelector('#iframe');

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// iframe.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let listener = addEventListener('blur', show(iframe));

function show(frame) {
    if (document.activeElement === document.getElementsByTagName('iframe')) {
        modal.style.display = "block";
        console.log('clicked');
    }
    removeEventListener(listener, show);
}


