// DOM element ref
const modeToggleBtn = document.getElementById('modeToggle');

//Event Listener
modeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
})

function goBack() {
    window.history.back();
}
// console.log(goBack);