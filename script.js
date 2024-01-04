/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var date = new Date();
var am_pm = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
var current_time = am_pm;
document.getElementById("time").innerHTML = current_time;


document.querySelector('.remove-notepad-btn').addEventListener('click', () => {
    document.querySelector('#notepad').classList.add('notepad-hidden');
});

document.querySelector('.add-notepad-btn').addEventListener('click', () => {
    document.querySelector('#notepad').classList.remove('notepad-hidden');
});